<?php
declare(strict_types=1);

namespace Hyva\Checkout\Plugin\CheckoutController;

use Hyva\Checkout\Config\Checkout;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\Controller\Result\Forward;
use Magento\Checkout\Controller\Index\Index as CheckoutIndex;

class Index
{
    /**
     * @var ResultFactory
     */
    private $resultFactory;

    /**
     * @var Checkout
     */
    private $checkoutConfig;

    /**
     * @param ResultFactory $resultFactory
     * @param Checkout $checkoutConfig
     */
    public function __construct(
        ResultFactory $resultFactory,
        Checkout $checkoutConfig
    )
    {
        $this->resultFactory = $resultFactory;
        $this->checkoutConfig = $checkoutConfig;
    }

    /**
     * Perform redirect to cart action if needed
     *
     * @param CheckoutIndex $subject
     * @param callable $proceed
     * @return ResultInterface
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    //phpcs:ignore MEQP2.Classes.PublicNonInterfaceMethods.PublicMethodFound, Generic.CodeAnalysis.UnusedFunctionParameter.Found
    public function aroundExecute(CheckoutIndex $subject, callable $proceed)
    {
        if ($this->isNeedToRedirectCheckout()) {
            /** @var Forward $resultForward */
            $resultForward = $this->resultFactory->create(ResultFactory::TYPE_FORWARD);
            $result = $resultForward
                ->setModule('hyva')
                ->setController('checkout')
                ->forward('index');

        } else {
            $result = $proceed();
        }
        return $result;
    }

    /**
     * Check if need to perform redirect to cart
     *
     * @return bool
     */
    private function isNeedToRedirectCheckout(): bool
    {
        return $this->checkoutConfig->isEnabled();
    }
}
