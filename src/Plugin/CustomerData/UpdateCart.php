<?php
declare(strict_types=1);

namespace Hyva\Checkout\Plugin\CustomerData;

use Magento\Checkout\CustomerData\Cart;
use Magento\Checkout\Model\Session as CheckoutSession;
use Magento\Quote\Model\QuoteIdToMaskedQuoteIdInterface;

/**
 * Plugin to update the cart info in customerData that passes to the frontend.
 *
 * It plugin to the class: Magento\Checkout\CustomerData\Cart
 */
class UpdateCart
{
    /**
     * @var \Magento\Quote\Model\Quote|null
     */
    private $quote = null;

    /**
     * @var \Magento\Checkout\Model\Session
     */
    private $checkoutSession;

    /**
     * @var \Magento\Quote\Model\QuoteIdToMaskedQuoteIdInterface
     */
    private $quoteIdToMaskedQuote;

    /**
     * UpdateCart constructor.
     *
     * @param \Magento\Checkout\Model\Session $checkoutSession
     * @param \Magento\Quote\Model\QuoteIdToMaskedQuoteIdInterface $quoteToMaskedQuote
     */
    public function __construct(CheckoutSession $checkoutSession, QuoteIdToMaskedQuoteIdInterface $quoteToMaskedQuote)
    {
        $this->checkoutSession = $checkoutSession;
        $this->quoteIdToMaskedQuote = $quoteToMaskedQuote;
    }

    /**
     * Appending cart mask id into the result
     *
     * @param \Magento\Checkout\CustomerData\Cart $cartCustomerData
     * @param array $result
     * @return array
     */
    public function afterGetSectionData(Cart $cartCustomerData, array $result)
    {
        try {
            $quoteId = (int)$this->getQuote()->getId();
            $maskId = $this->quoteIdToMaskedQuote->execute($quoteId);
            $result['cartId'] = $maskId;

            return $result;
        } catch (\Exception $exception) {
            return $result;
        }
    }

    /**
     * Get active quote
     *
     * @return \Magento\Quote\Model\Quote
     */
    private function getQuote()
    {
        if (null === $this->quote) {
            $this->quote = $this->checkoutSession->getQuote();
        }
        return $this->quote;
    }
}
