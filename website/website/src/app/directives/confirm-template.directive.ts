import { Directive, TemplateRef } from '@angular/core';
import { ModalSate } from 'src/services/modal.service';

/**
 * Directive allowing to get a reference to the template containing the Modal component,
 * and to store it into the internal confirm state service. Somewhere in the view, there must be
 *
 * ```
 * <template confirm>
 *   <modal-component></modal-component>
 * </template>
 * ```
 *
 * in order to register the confirm template to the internal confirm state
 */
@Directive({
  selector: '[confirm]'
})
export class ConfirmTemplateDirective {

  constructor(private confirmTemplate: TemplateRef<any>, state: ModalSate) {
    state.template = this.confirmTemplate;
   }

}
