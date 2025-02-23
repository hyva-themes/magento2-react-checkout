<?php

declare(strict_types=1);

namespace Hyva\ReactCheckout\Observer;

use Exception;
use Magento\Customer\Model\Attribute;
use Magento\Customer\Model\AttributeMetadataDataProvider as CustomerAttributeMetaDataProvider;
use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;


class AddAddressFieldsCheckoutConfig implements ObserverInterface
{

    private CustomerAttributeMetaDataProvider $customerAttributeMetaDataProvider;

    public function __construct(CustomerAttributeMetaDataProvider $customerAttributeMetaDataProvider)
    {
        $this->customerAttributeMetaDataProvider = $customerAttributeMetaDataProvider;
    }

    public function execute(Observer $observer): void
    {
        $transport = $observer->getTransport();
        $outputData = $transport->getOutput();

        try {
            $addressConfig = $this->getAddressFieldInfo();
            $outputData['address']['billing'] = $addressConfig;
            $outputData['address']['shipping'] = $addressConfig;
        } catch (Exception $exception) {
            return;
        }

        $transport->setOutput($outputData);
    }

    private function getAddressFieldInfo(): array
    {
        $fields = [];
        $attributes = $this->customerAttributeMetaDataProvider->loadAttributesCollection(
            'customer_address',
            'customer_register_address'
        );

        /** @var Attribute $attribute */
        foreach ($attributes as $attribute) {
            if (!$attribute->getIsVisible()) {
                continue;
            }
            $fields[$attribute->getAttributeCode()] = [
                'code' => $attribute->getAttributeCode(),
                'label' => __($attribute->getStoreLabel())->render(),
                'type' => $attribute->getFrontendInput(),
                'isRequired' => (bool) $attribute->getIsRequired(),
                'validationRules' => $attribute->getValidateRules(),
                'sortOrder' => (int) $attribute->getSortOrder(),
            ];

            if ($attribute->getFrontendInput() === 'multiline') {
                $fields[$attribute->getAttributeCode()]['multilineCount'] = (int) $attribute->getMultilineCount();
            }
        }

        return $fields;
    }
}
