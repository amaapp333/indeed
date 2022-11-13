// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require('stripe');
const express = require('express');
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_ed17af0533b876544c27c72a44ab3babc5227276b81d4b3d4e2a8c3ed2febb47";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'account.updated':
      const account = event.data.object;
      // Then define and call a function to handle the event account.updated
      break;
    case 'account.application.authorized':
      const application = event.data.object;
      // Then define and call a function to handle the event account.application.authorized
      break;
    case 'account.application.deauthorized':
      const application = event.data.object;
      // Then define and call a function to handle the event account.application.deauthorized
      break;
    case 'account.external_account.created':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.created
      break;
    case 'account.external_account.deleted':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.deleted
      break;
    case 'account.external_account.updated':
      const externalAccount = event.data.object;
      // Then define and call a function to handle the event account.external_account.updated
      break;
    case 'application_fee.created':
      const applicationFee = event.data.object;
      // Then define and call a function to handle the event application_fee.created
      break;
    case 'application_fee.refunded':
      const applicationFee = event.data.object;
      // Then define and call a function to handle the event application_fee.refunded
      break;
    case 'application_fee.refund.updated':
      const refund = event.data.object;
      // Then define and call a function to handle the event application_fee.refund.updated
      break;
    case 'balance.available':
      const balance = event.data.object;
      // Then define and call a function to handle the event balance.available
      break;
    case 'billing_portal.configuration.created':
      const configuration = event.data.object;
      // Then define and call a function to handle the event billing_portal.configuration.created
      break;
    case 'billing_portal.configuration.updated':
      const configuration = event.data.object;
      // Then define and call a function to handle the event billing_portal.configuration.updated
      break;
    case 'billing_portal.session.created':
      const session = event.data.object;
      // Then define and call a function to handle the event billing_portal.session.created
      break;
    case 'capability.updated':
      const capability = event.data.object;
      // Then define and call a function to handle the event capability.updated
      break;
    case 'cash_balance.funds_available':
      const cashBalance = event.data.object;
      // Then define and call a function to handle the event cash_balance.funds_available
      break;
    case 'charge.captured':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.captured
      break;
    case 'charge.expired':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.expired
      break;
    case 'charge.failed':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.failed
      break;
    case 'charge.pending':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.pending
      break;
    case 'charge.refunded':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.refunded
      break;
    case 'charge.succeeded':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.succeeded
      break;
    case 'charge.updated':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.updated
      break;
    case 'charge.dispute.closed':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.closed
      break;
    case 'charge.dispute.created':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.created
      break;
    case 'charge.dispute.funds_reinstated':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.funds_reinstated
      break;
    case 'charge.dispute.funds_withdrawn':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.funds_withdrawn
      break;
    case 'charge.dispute.updated':
      const dispute = event.data.object;
      // Then define and call a function to handle the event charge.dispute.updated
      break;
    case 'charge.refund.updated':
      const refund = event.data.object;
      // Then define and call a function to handle the event charge.refund.updated
      break;
    case 'checkout.session.async_payment_failed':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'checkout.session.expired':
      const session = event.data.object;
      // Then define and call a function to handle the event checkout.session.expired
      break;
    case 'coupon.created':
      const coupon = event.data.object;
      // Then define and call a function to handle the event coupon.created
      break;
    case 'coupon.deleted':
      const coupon = event.data.object;
      // Then define and call a function to handle the event coupon.deleted
      break;
    case 'coupon.updated':
      const coupon = event.data.object;
      // Then define and call a function to handle the event coupon.updated
      break;
    case 'credit_note.created':
      const creditNote = event.data.object;
      // Then define and call a function to handle the event credit_note.created
      break;
    case 'credit_note.updated':
      const creditNote = event.data.object;
      // Then define and call a function to handle the event credit_note.updated
      break;
    case 'credit_note.voided':
      const creditNote = event.data.object;
      // Then define and call a function to handle the event credit_note.voided
      break;
    case 'customer.created':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.created
      break;
    case 'customer.deleted':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.deleted
      break;
    case 'customer.updated':
      const customer = event.data.object;
      // Then define and call a function to handle the event customer.updated
      break;
    case 'customer.discount.created':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.created
      break;
    case 'customer.discount.deleted':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.deleted
      break;
    case 'customer.discount.updated':
      const discount = event.data.object;
      // Then define and call a function to handle the event customer.discount.updated
      break;
    case 'customer.source.created':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.created
      break;
    case 'customer.source.deleted':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.deleted
      break;
    case 'customer.source.expiring':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.expiring
      break;
    case 'customer.source.updated':
      const source = event.data.object;
      // Then define and call a function to handle the event customer.source.updated
      break;
    case 'customer.subscription.created':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.pending_update_applied':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_applied
      break;
    case 'customer.subscription.pending_update_expired':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_expired
      break;
    case 'customer.subscription.trial_will_end':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.trial_will_end
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    case 'customer.tax_id.created':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.created
      break;
    case 'customer.tax_id.deleted':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.deleted
      break;
    case 'customer.tax_id.updated':
      const taxId = event.data.object;
      // Then define and call a function to handle the event customer.tax_id.updated
      break;
    case 'customer_cash_balance_transaction.created':
      const customerCashBalanceTransaction = event.data.object;
      // Then define and call a function to handle the event customer_cash_balance_transaction.created
      break;
    case 'file.created':
      const file = event.data.object;
      // Then define and call a function to handle the event file.created
      break;
    case 'financial_connections.account.created':
      const account = event.data.object;
      // Then define and call a function to handle the event financial_connections.account.created
      break;
    case 'financial_connections.account.deactivated':
      const account = event.data.object;
      // Then define and call a function to handle the event financial_connections.account.deactivated
      break;
    case 'financial_connections.account.disconnected':
      const account = event.data.object;
      // Then define and call a function to handle the event financial_connections.account.disconnected
      break;
    case 'financial_connections.account.reactivated':
      const account = event.data.object;
      // Then define and call a function to handle the event financial_connections.account.reactivated
      break;
    case 'financial_connections.account.refreshed_balance':
      const account = event.data.object;
      // Then define and call a function to handle the event financial_connections.account.refreshed_balance
      break;
    case 'identity.verification_session.canceled':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.canceled
      break;
    case 'identity.verification_session.created':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.created
      break;
    case 'identity.verification_session.processing':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.processing
      break;
    case 'identity.verification_session.requires_input':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.requires_input
      break;
    case 'identity.verification_session.verified':
      const verificationSession = event.data.object;
      // Then define and call a function to handle the event identity.verification_session.verified
      break;
    case 'invoice.created':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.created
      break;
    case 'invoice.deleted':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.deleted
      break;
    case 'invoice.finalization_failed':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.finalization_failed
      break;
    case 'invoice.finalized':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.finalized
      break;
    case 'invoice.marked_uncollectible':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.marked_uncollectible
      break;
    case 'invoice.paid':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.paid
      break;
    case 'invoice.payment_action_required':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_action_required
      break;
    case 'invoice.payment_failed':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_failed
      break;
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_succeeded
      break;
    case 'invoice.sent':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.sent
      break;
    case 'invoice.upcoming':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.upcoming
      break;
    case 'invoice.updated':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.updated
      break;
    case 'invoice.voided':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.voided
      break;
    case 'invoiceitem.created':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.created
      break;
    case 'invoiceitem.deleted':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.deleted
      break;
    case 'invoiceitem.updated':
      const invoiceitem = event.data.object;
      // Then define and call a function to handle the event invoiceitem.updated
      break;
    case 'issuing_authorization.created':
      const issuingAuthorization = event.data.object;
      // Then define and call a function to handle the event issuing_authorization.created
      break;
    case 'issuing_authorization.updated':
      const issuingAuthorization = event.data.object;
      // Then define and call a function to handle the event issuing_authorization.updated
      break;
    case 'issuing_card.created':
      const issuingCard = event.data.object;
      // Then define and call a function to handle the event issuing_card.created
      break;
    case 'issuing_card.updated':
      const issuingCard = event.data.object;
      // Then define and call a function to handle the event issuing_card.updated
      break;
    case 'issuing_cardholder.created':
      const issuingCardholder = event.data.object;
      // Then define and call a function to handle the event issuing_cardholder.created
      break;
    case 'issuing_cardholder.updated':
      const issuingCardholder = event.data.object;
      // Then define and call a function to handle the event issuing_cardholder.updated
      break;
    case 'issuing_dispute.closed':
      const issuingDispute = event.data.object;
      // Then define and call a function to handle the event issuing_dispute.closed
      break;
    case 'issuing_dispute.created':
      const issuingDispute = event.data.object;
      // Then define and call a function to handle the event issuing_dispute.created
      break;
    case 'issuing_dispute.funds_reinstated':
      const issuingDispute = event.data.object;
      // Then define and call a function to handle the event issuing_dispute.funds_reinstated
      break;
    case 'issuing_dispute.submitted':
      const issuingDispute = event.data.object;
      // Then define and call a function to handle the event issuing_dispute.submitted
      break;
    case 'issuing_dispute.updated':
      const issuingDispute = event.data.object;
      // Then define and call a function to handle the event issuing_dispute.updated
      break;
    case 'issuing_transaction.created':
      const issuingTransaction = event.data.object;
      // Then define and call a function to handle the event issuing_transaction.created
      break;
    case 'issuing_transaction.updated':
      const issuingTransaction = event.data.object;
      // Then define and call a function to handle the event issuing_transaction.updated
      break;
    case 'mandate.updated':
      const mandate = event.data.object;
      // Then define and call a function to handle the event mandate.updated
      break;
    case 'order.created':
      const order = event.data.object;
      // Then define and call a function to handle the event order.created
      break;
    case 'payment_intent.amount_capturable_updated':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.amount_capturable_updated
      break;
    case 'payment_intent.canceled':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.canceled
      break;
    case 'payment_intent.created':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.created
      break;
    case 'payment_intent.partially_funded':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.partially_funded
      break;
    case 'payment_intent.payment_failed':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.payment_failed
      break;
    case 'payment_intent.processing':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.processing
      break;
    case 'payment_intent.requires_action':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.requires_action
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    case 'payment_link.created':
      const paymentLink = event.data.object;
      // Then define and call a function to handle the event payment_link.created
      break;
    case 'payment_link.updated':
      const paymentLink = event.data.object;
      // Then define and call a function to handle the event payment_link.updated
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.attached
      break;
    case 'payment_method.automatically_updated':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.automatically_updated
      break;
    case 'payment_method.detached':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.detached
      break;
    case 'payment_method.updated':
      const paymentMethod = event.data.object;
      // Then define and call a function to handle the event payment_method.updated
      break;
    case 'payout.canceled':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.canceled
      break;
    case 'payout.created':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.created
      break;
    case 'payout.failed':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.failed
      break;
    case 'payout.paid':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.paid
      break;
    case 'payout.updated':
      const payout = event.data.object;
      // Then define and call a function to handle the event payout.updated
      break;
    case 'person.created':
      const person = event.data.object;
      // Then define and call a function to handle the event person.created
      break;
    case 'person.deleted':
      const person = event.data.object;
      // Then define and call a function to handle the event person.deleted
      break;
    case 'person.updated':
      const person = event.data.object;
      // Then define and call a function to handle the event person.updated
      break;
    case 'plan.created':
      const plan = event.data.object;
      // Then define and call a function to handle the event plan.created
      break;
    case 'plan.deleted':
      const plan = event.data.object;
      // Then define and call a function to handle the event plan.deleted
      break;
    case 'plan.updated':
      const plan = event.data.object;
      // Then define and call a function to handle the event plan.updated
      break;
    case 'price.created':
      const price = event.data.object;
      // Then define and call a function to handle the event price.created
      break;
    case 'price.deleted':
      const price = event.data.object;
      // Then define and call a function to handle the event price.deleted
      break;
    case 'price.updated':
      const price = event.data.object;
      // Then define and call a function to handle the event price.updated
      break;
    case 'product.created':
      const product = event.data.object;
      // Then define and call a function to handle the event product.created
      break;
    case 'product.deleted':
      const product = event.data.object;
      // Then define and call a function to handle the event product.deleted
      break;
    case 'product.updated':
      const product = event.data.object;
      // Then define and call a function to handle the event product.updated
      break;
    case 'promotion_code.created':
      const promotionCode = event.data.object;
      // Then define and call a function to handle the event promotion_code.created
      break;
    case 'promotion_code.updated':
      const promotionCode = event.data.object;
      // Then define and call a function to handle the event promotion_code.updated
      break;
    case 'quote.accepted':
      const quote = event.data.object;
      // Then define and call a function to handle the event quote.accepted
      break;
    case 'quote.canceled':
      const quote = event.data.object;
      // Then define and call a function to handle the event quote.canceled
      break;
    case 'quote.created':
      const quote = event.data.object;
      // Then define and call a function to handle the event quote.created
      break;
    case 'quote.finalized':
      const quote = event.data.object;
      // Then define and call a function to handle the event quote.finalized
      break;
    case 'radar.early_fraud_warning.created':
      const earlyFraudWarning = event.data.object;
      // Then define and call a function to handle the event radar.early_fraud_warning.created
      break;
    case 'radar.early_fraud_warning.updated':
      const earlyFraudWarning = event.data.object;
      // Then define and call a function to handle the event radar.early_fraud_warning.updated
      break;
    case 'recipient.created':
      const recipient = event.data.object;
      // Then define and call a function to handle the event recipient.created
      break;
    case 'recipient.deleted':
      const recipient = event.data.object;
      // Then define and call a function to handle the event recipient.deleted
      break;
    case 'recipient.updated':
      const recipient = event.data.object;
      // Then define and call a function to handle the event recipient.updated
      break;
    case 'reporting.report_run.failed':
      const reportRun = event.data.object;
      // Then define and call a function to handle the event reporting.report_run.failed
      break;
    case 'reporting.report_run.succeeded':
      const reportRun = event.data.object;
      // Then define and call a function to handle the event reporting.report_run.succeeded
      break;
    case 'review.closed':
      const review = event.data.object;
      // Then define and call a function to handle the event review.closed
      break;
    case 'review.opened':
      const review = event.data.object;
      // Then define and call a function to handle the event review.opened
      break;
    case 'setup_intent.canceled':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.canceled
      break;
    case 'setup_intent.created':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.created
      break;
    case 'setup_intent.requires_action':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.requires_action
      break;
    case 'setup_intent.setup_failed':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.setup_failed
      break;
    case 'setup_intent.succeeded':
      const setupIntent = event.data.object;
      // Then define and call a function to handle the event setup_intent.succeeded
      break;
    case 'sigma.scheduled_query_run.created':
      const scheduledQueryRun = event.data.object;
      // Then define and call a function to handle the event sigma.scheduled_query_run.created
      break;
    case 'sku.created':
      const sku = event.data.object;
      // Then define and call a function to handle the event sku.created
      break;
    case 'sku.deleted':
      const sku = event.data.object;
      // Then define and call a function to handle the event sku.deleted
      break;
    case 'sku.updated':
      const sku = event.data.object;
      // Then define and call a function to handle the event sku.updated
      break;
    case 'source.canceled':
      const source = event.data.object;
      // Then define and call a function to handle the event source.canceled
      break;
    case 'source.chargeable':
      const source = event.data.object;
      // Then define and call a function to handle the event source.chargeable
      break;
    case 'source.failed':
      const source = event.data.object;
      // Then define and call a function to handle the event source.failed
      break;
    case 'source.mandate_notification':
      const source = event.data.object;
      // Then define and call a function to handle the event source.mandate_notification
      break;
    case 'source.refund_attributes_required':
      const source = event.data.object;
      // Then define and call a function to handle the event source.refund_attributes_required
      break;
    case 'source.transaction.created':
      const transaction = event.data.object;
      // Then define and call a function to handle the event source.transaction.created
      break;
    case 'source.transaction.updated':
      const transaction = event.data.object;
      // Then define and call a function to handle the event source.transaction.updated
      break;
    case 'subscription_schedule.aborted':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.aborted
      break;
    case 'subscription_schedule.canceled':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.canceled
      break;
    case 'subscription_schedule.completed':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.completed
      break;
    case 'subscription_schedule.created':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.created
      break;
    case 'subscription_schedule.expiring':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.expiring
      break;
    case 'subscription_schedule.released':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.released
      break;
    case 'subscription_schedule.updated':
      const subscriptionSchedule = event.data.object;
      // Then define and call a function to handle the event subscription_schedule.updated
      break;
    case 'tax_rate.created':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.created
      break;
    case 'tax_rate.updated':
      const taxRate = event.data.object;
      // Then define and call a function to handle the event tax_rate.updated
      break;
    case 'terminal.reader.action_failed':
      const reader = event.data.object;
      // Then define and call a function to handle the event terminal.reader.action_failed
      break;
    case 'terminal.reader.action_succeeded':
      const reader = event.data.object;
      // Then define and call a function to handle the event terminal.reader.action_succeeded
      break;
    case 'test_helpers.test_clock.advancing':
      const testClock = event.data.object;
      // Then define and call a function to handle the event test_helpers.test_clock.advancing
      break;
    case 'test_helpers.test_clock.created':
      const testClock = event.data.object;
      // Then define and call a function to handle the event test_helpers.test_clock.created
      break;
    case 'test_helpers.test_clock.deleted':
      const testClock = event.data.object;
      // Then define and call a function to handle the event test_helpers.test_clock.deleted
      break;
    case 'test_helpers.test_clock.internal_failure':
      const testClock = event.data.object;
      // Then define and call a function to handle the event test_helpers.test_clock.internal_failure
      break;
    case 'test_helpers.test_clock.ready':
      const testClock = event.data.object;
      // Then define and call a function to handle the event test_helpers.test_clock.ready
      break;
    case 'topup.canceled':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.canceled
      break;
    case 'topup.created':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.created
      break;
    case 'topup.failed':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.failed
      break;
    case 'topup.reversed':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.reversed
      break;
    case 'topup.succeeded':
      const topup = event.data.object;
      // Then define and call a function to handle the event topup.succeeded
      break;
    case 'transfer.created':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.created
      break;
    case 'transfer.reversed':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.reversed
      break;
    case 'transfer.updated':
      const transfer = event.data.object;
      // Then define and call a function to handle the event transfer.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));
