<?php
declare(strict_types=1);

namespace Hyva\ReactCheckout\Result;

use Magento\Framework\ObjectManagerInterface;

class JsonFactory extends \Magento\Framework\Controller\Result\JsonFactory
{
    /**
     * Providing a custom Json instance here.
     *
     * @param  \Magento\Framework\ObjectManagerInterface  $objectManager
     * @param  string  $instanceName
     * @SuppressWarnings(PHPMD.UselessOverridingMethod)
     */
    public function __construct(
        ObjectManagerInterface $objectManager,
        $instanceName = Json::class
    ) {
        parent::__construct($objectManager, $instanceName);
    }
}
