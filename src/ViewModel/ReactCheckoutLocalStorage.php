<?php declare(strict_types=1);

namespace Hyva\ReactCheckout\ViewModel;

use Magento\Authorization\Model\UserContextInterface;
use Magento\Checkout\Model\Session as CheckoutSession;
use Magento\Customer\Model\Address;
use Magento\Customer\Model\Customer;
use Magento\Customer\Model\Session as CustomerSession;
use Magento\Framework\Serialize\SerializerInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Integration\Api\UserTokenIssuerInterface;
use Magento\Integration\Model\CustomUserContext;
use Magento\Integration\Model\UserToken\UserTokenParametersFactory;

class ReactCheckoutLocalStorage implements ArgumentInterface
{
    /**
     * @var CheckoutSession
     */
    private $checkoutSession;

    /**
     * @var CustomerSession
     */
    private $customerSession;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var UserTokenParametersFactory
     */
    private $tokenParametersFactory;

    /**
     * @var UserTokenIssuerInterface
     */
    private $tokenIssuer;

    public function __construct(
        SerializerInterface $serializer,
        CheckoutSession $checkoutSession,
        CustomerSession $customerSession,
        UserTokenIssuerInterface $tokenIssuer,
        UserTokenParametersFactory $tokenParametersFactory
    ) {
        $this->serializer = $serializer;
        $this->tokenIssuer = $tokenIssuer;
        $this->checkoutSession = $checkoutSession;
        $this->customerSession = $customerSession;
        $this->tokenParametersFactory = $tokenParametersFactory;
    }

    public function getLocalStorageConfig(): string
    {
        $config = [
            'customerIsLoggedIn' => $this->isCustomerLoggedIn(),
            'quoteContainsBilling' => $this->hasQuoteContainsValidBillingAddress(),
            'quoteContainsShipping' => $this->hasQuoteContainsValidShippingAddress(),
            'defaultBillingAddressId' => $this->getCustomerDefaultBillingAddressId(),
            'defaultShippingAddressId' => $this->getCustomerDefaultShippingAddressId(),
            'quoteBillingAddressCustomerId' => $this->getQuoteBillingAddressCustomerId(),
            'quoteShippingAddressCustomerId' => $this->getQuoteShippingAddressCustomerId(),
        ];

        return $this->serializer->serialize($config);
    }

    public function getCustomerToken(): string
    {
        if (!$this->isCustomerLoggedIn()) {
            return '';
        }

        $customerId = (int)$this->customerSession->getCustomer()->getId();
        $context = new CustomUserContext($customerId, UserContextInterface::USER_TYPE_CUSTOMER);
        $params = $this->tokenParametersFactory->create();

        return $this->tokenIssuer->create($context, $params);
    }

    private function isCustomerLoggedIn(): bool
    {
        return $this->customerSession->isLoggedIn() && $this->getCustomer()->getCustomerId();
    }

    private function getCustomerDefaultBillingAddressId(): ?int
    {
        $defaultBillingAddress = $this->getCustomer()->getDefaultBillingAddress();

        return $defaultBillingAddress instanceof Address
            ? (int)$defaultBillingAddress->getId()
            : null;
    }

    private function getCustomerDefaultShippingAddressId(): ?int
    {
        $defaultShippingAddress = $this->getCustomer()->getDefaultShippingAddress();

        return $defaultShippingAddress instanceof Address
            ? (int)$defaultShippingAddress->getId()
            : null;
    }

    private function hasQuoteContainsValidBillingAddress(): bool
    {
        $errors = $this->checkoutSession->getQuote()->getBillingAddress()->validate();

        return $errors === true;
    }

    private function hasQuoteContainsValidShippingAddress(): bool
    {
        $errors = $this->checkoutSession->getQuote()->getShippingAddress()->validate();

        return $errors === true;
    }

    private function getQuoteBillingAddressCustomerId(): ?int
    {
        $customerAddressId = $this->checkoutSession->getQuote()->getBillingAddress()->getCustomerAddressId();

        return $customerAddressId !== null
            ? (int)$customerAddressId
            : null;
    }

    private function getQuoteShippingAddressCustomerId(): ?int
    {
        $customerAddressId = $this->checkoutSession->getQuote()->getShippingAddress()->getCustomerAddressId();

        return $customerAddressId !== null
            ? (int)$customerAddressId
            : null;
    }

    private function getCustomer(): Customer
    {
        return $this->customerSession->getCustomer();
    }
}
