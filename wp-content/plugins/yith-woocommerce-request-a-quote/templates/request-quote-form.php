<?php
/**
 * Form to Request a quote
 *
 * @package YITH WooCommerce Request A Quote
 * @since   1.0.0
 * @version 1.5.3
 * @author  YITH
 */

$ywraq_current_user = array(); //phpcs:ignore
if ( is_user_logged_in() ) {
	$ywraq_current_user = get_user_by( 'id', get_current_user_id() );
}

$user_name = ( ! empty( $ywraq_current_user ) ) ? $ywraq_current_user->display_name : '';
$user_mail = ( ! empty( $ywraq_current_user ) ) ? $ywraq_current_user->user_email : '';
$user_phone = ( ! empty( $ywraq_current_user ) ) ? $ywraq_current_user->user_phone : '';
?>
<div class="yith-ywraq-mail-form-wrapper">
	<h3 class="send-requeast-title"><php esc_html_e( 'Confirm and enter the details below', 'yith-woocommerce-request-a-quote' ); ?></h3>

	<form id="yith-ywraq-mail-form" name="yith-ywraq-mail-form" action="<?php echo esc_url( YITH_Request_Quote()->get_raq_page_url() ); ?>" method="post">

            <div class="form-row">
    			<p class="form-column validate-required " id="rqa_name_row">
    				<label for="rqa-name" class=""><?php esc_html_e( 'Name', 'yith-woocommerce-request-a-quote' ); ?>
    					<abbr class="required" title="required">*</abbr></label>
    				<input type="text" class="input-text " name="rqa_name" id="rqa-name" placeholder="" value="<?php echo esc_attr( $user_name ); ?>" required>
    			</p>
    
    			<p class="form-column validate-required" id="rqa_email_row">
    				<label for="rqa-email" class=""><?php esc_html_e( 'Email', 'yith-woocommerce-request-a-quote' ); ?>
    					<abbr class="required" title="required">*</abbr></label>
    				<input type="email" class="input-text " name="rqa_email" id="rqa-email" placeholder="" value="<?php echo esc_attr( $user_mail ); ?>" required>
    			</p>
            </div>
			<p class="form-row form-row-wide validate-required" id="rqa_phone_row">
				<label for="rqa-phone" class=""><?php esc_html_e( 'Phone', 'yith-woocommerce-request-a-quote' ); ?>
					<abbr class="required" title="required">*</abbr></label>
				<input type="text" class="input-text " name="rqa_phone" id="rqa-phone" placeholder="" value="<?php echo esc_attr( $user_phone ); ?>" required>
			</p>

		<p class="form-row" id="rqa_message_row">
			<label for="rqa-message" class=""><?php esc_html_e( 'Message', 'yith-woocommerce-request-a-quote' ); ?></label>
			<textarea name="rqa_message" class="input-text " id="rqa-message" placeholder="<?php esc_html_e( 'Notes on your request...', 'yith-woocommerce-request-a-quote' ); ?>" rows="5" cols="5"></textarea>
		</p>

		<?php if ( 'yes' === get_option( 'ywraq_add_privacy_checkbox', 'no' ) ) : ?>
			<div class="ywraq-privacy-wrapper">
				<p class="form-row" id="rqa_privacy_description_row"><?php echo wp_kses_post( ywraq_replace_policy_page_link_placeholders( get_option( 'ywraq_privacy_description' ) ) ); ?></p>
				<p class="form-row" id="rqa_privacy_row">
					<input type="checkbox" name="rqa_privacy" id="rqa_privacy" required>
					<label for="rqa_privacy"><?php echo wp_kses_post( ywraq_replace_policy_page_link_placeholders( get_option( 'ywraq_privacy_label' ) ) ); ?>
						<abbr class="required" title="required">*</abbr></label>
				</p>
			</div>
		<?php endif ?>

		<p class="form-row">
			<input type="hidden" id="raq-mail-wpnonce" name="raq_mail_wpnonce" value="<?php echo esc_attr( wp_create_nonce( 'send-request-quote' ) ); ?>">
			<input class="button raq-send-request" type="submit" value="<?php esc_html_e( 'Get Quote', 'yith-woocommerce-request-a-quote' ); ?>">
		</p>

	</form>
</div>