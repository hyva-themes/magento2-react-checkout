<?php
declare(strict_types=1);

namespace Hyva\Checkout\ViewModel;

use Magento\Framework\Locale\ResolverInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class LocaleProvider implements ArgumentInterface
{
    /**
     * @var \Magento\Framework\Locale\ResolverInterface
     */
    private ResolverInterface $localeResolver;

    /**
     * LocaleProvider constructor.
     *
     * @param \Magento\Framework\Locale\ResolverInterface $localeResolver
     */
    public function __construct(ResolverInterface $localeResolver)
    {
        $this->localeResolver = $localeResolver;
    }

    /**
     * @return string
     */
    public function getLocaleCode(): string
    {
        return $this->localeResolver->getLocale();
    }
}
