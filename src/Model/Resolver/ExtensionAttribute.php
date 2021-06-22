<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace Hyva\Checkout\Model\Resolver;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\Reflection\DataObjectProcessor;
use Magento\Directory\Api\CountryInformationAcquirerInterface;
use Magento\Directory\Api\Data\CountryInformationInterface;
use Magento\Framework\GraphQl\Exception\GraphQlInputException;

/**
 * ExtensionAttribute field resolver, used for GraphQL request processing.
 * Turns any custom extension attribute into a GQL field.
 */
class ExtensionAttribute implements ResolverInterface
{
    /**
     * @param DataObjectProcessor $dataProcessor
     * @param CountryInformationAcquirerInterface $countryInformationAcquirer
     */
    public function __construct(
        DataObjectProcessor $dataProcessor,
        CountryInformationAcquirerInterface $countryInformationAcquirer
    ) {
        $this->dataProcessor = $dataProcessor;
        $this->countryInformationAcquirer = $countryInformationAcquirer;
    }

    /**
     * @inheritdoc
     */
    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
            return $value['extension_attributes'][$field->getName()] ?? null;
    }
}
