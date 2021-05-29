<?php
declare(strict_types=1);

namespace Hyva\Checkout\Plugin\CustomerController;

use Hyva\Checkout\Config\Checkout as HyvaCheckoutConfig;
use Hyva\Checkout\Model\LoginSectionDataServiceFactory;
use Magento\Customer\Controller\Ajax\Login as CustomerAjaxLoginController;
use Hyva\Checkout\Result\Json as JsonResult;
use Magento\Framework\Controller\ResultInterface;
use Psr\Log\LoggerInterface;

/**
 * Ajax login will authenticate user, merge carts and correctly set session.
 * Doing the above using graphql is a pain actually where we need to authenticate
 * user, merge carts and then finally fetch cart info. Still, will face session
 * issues. So rely on ajax login is better here.
 */
class AjaxLogin
{
    /**
     * @var \Hyva\Checkout\Config\Checkout
     */
    private $hyvaCheckoutConfig;

    /**
     * @var \Psr\Log\LoggerInterface
     */
    private $logger;

    /**
     * @var \Hyva\Checkout\Model\LoginSectionDataServiceFactory
     */
    private $loginSectionDataServiceFactory;

    /**
     * AjaxLogin constructor.
     *
     * @param  \Psr\Log\LoggerInterface  $logger
     * @param  \Hyva\Checkout\Config\Checkout  $hyvaCheckoutConfig
     * @param  LoginSectionDataServiceFactory  $loginSectionDataServiceFactory
     */
    public function __construct(
        LoggerInterface $logger,
        HyvaCheckoutConfig $hyvaCheckoutConfig,
        LoginSectionDataServiceFactory $loginSectionDataServiceFactory
    ) {
        $this->logger = $logger;
        $this->hyvaCheckoutConfig = $hyvaCheckoutConfig;
        $this->loginSectionDataServiceFactory = $loginSectionDataServiceFactory;
    }

    /**
     * Include cart and customer information in the ajax login result
     *
     * This is needed in the react app side in order to fetch the customer cart
     * info using graphql. Graphql customerCart query needs customer token id
     * in order to correctly fetch the details.
     *
     * @param  \Magento\Customer\Controller\Ajax\Login  $ajaxLoginController
     * @param  \Magento\Framework\Controller\ResultInterface  $result
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function afterExecute(
        CustomerAjaxLoginController $ajaxLoginController,
        ResultInterface $result
    ): ResultInterface {
        if (!$this->canProceed($result)) {
            return $result;
        }

        try {
            /** @var \Hyva\Checkout\Model\LoginSectionDataService $sectionDataService */
            $sectionDataService = $this->loginSectionDataServiceFactory->create();
            $response = $result->getData();
            $response['customerData'] = $sectionDataService->getSectionData();

            return $result->setData($response);
        } catch (\Exception $exception) {
            $this->logger->critical($exception);
            return $result;
        }
    }

    /**
     * @param  \Magento\Framework\Controller\ResultInterface  $result
     * @return bool
     */
    private function canProceed(ResultInterface $result): bool
    {
        if (!$this->hyvaCheckoutConfig->isEnabled()) {
            return false;
        }

        if (!$result instanceof JsonResult) {
            return false;
        }

        if ($this->isErrorResponse($result)) {
            return false;
        }

        return true;
    }

    /**
     * @param  \Hyva\Checkout\Result\Json  $result
     * @return bool
     */
    private function isErrorResponse(JsonResult $result): bool
    {
        $data = $result->getData();
        return $data['errors'] === true;
    }
}
