<?php
declare(strict_types=1);

namespace Hyva\Checkout\Config;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;

class Checkout
{
    /**
     * @var ScopeConfigInterface
     */
    private $scopeConfig;

    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
    }

    public function isEnabled(): bool
    {
        return $this->scopeConfig->isSetFlag(
            'hyva_checkout/general/enable',
            ScopeInterface::SCOPE_STORE
        );
    }
}
