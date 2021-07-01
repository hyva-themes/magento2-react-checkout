<?php
declare(strict_types=1);

namespace Hyva\Checkout\ViewModel;

use Magento\Checkout\Model\CompositeConfigProvider;
use Magento\Framework\Serialize\SerializerInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Framework\Locale\ResolverInterface as LocaleResolverInterface;

class CheckoutConfigProvider implements ArgumentInterface
{
    /**
     * @var \Magento\Checkout\Model\CompositeConfigProvider
     */
    private $compositeConfigProvider;

    /**
     * @var \Magento\Framework\Serialize\SerializerInterface
     */
    private $serializer;

    /**
     * @var \Magento\Framework\Locale\ResolverInterface
     */
    private $localeResolver;

    /**
     * CheckoutConfigProvider constructor.
     *
     * @param  \Magento\Framework\Serialize\SerializerInterface  $serializer
     * @param  \Magento\Framework\Locale\ResolverInterface  $localeResolver
     * @param  \Magento\Checkout\Model\CompositeConfigProvider  $compositeConfigProvider
     */
    public function __construct(
        SerializerInterface $serializer,
        LocaleResolverInterface $localeResolver,
        CompositeConfigProvider $compositeConfigProvider
    ) {
        $this->serializer = $serializer;
        $this->localeResolver = $localeResolver;
        $this->compositeConfigProvider = $compositeConfigProvider;
    }

    /**
     * Provide checkout configuration
     *
     * The payment configuration inside checkout configuration is what really
     * needed for the react app at the moment. Hence we are passing only that
     * information for the moment.
     *
     * In future, if we need full checkout configuration, then we can alter that
     * here. It may need some changes in the react app too. But now, we are good
     * to go with only payment configuration.
     *
     * @return string
     */
    public function getConfig(): string
    {
        $checkoutConfig = $this->compositeConfigProvider->getConfig();
        $storeCode = $checkoutConfig['storeCode'];
        $checkoutConfig['payment']['restUrlPrefix'] = "/rest/$storeCode/V1/";

        return $this->serializer->serialize([
            'storeCode' => $storeCode,
            'payment' => $checkoutConfig['payment'],
            'language' => $this->localeResolver->getLocale(),
            'defaultCountryId' => $checkoutConfig['defaultCountryId'],
        ]);
    }
}
