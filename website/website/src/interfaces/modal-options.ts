/**
 * Options passed when opening a Modal
 */
export interface ModalOptions {
    /**
     * Title of Modal
     */
    title: string,

    /**
     * Optional URL string image of Modal
     */
    image?: string;

    /**
     * Message of Modal
     */
    message: string;

     /**
      * Modal button text for confirming
      */
     buttonText?: string;
}
