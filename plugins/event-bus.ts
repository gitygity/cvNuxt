import mitt from 'mitt'
import { OpenModalType } from '~/components/shared/modal/modalTypes';



type ApplicationEvents = {
  'modal:open':OpenModalType,
};

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>()

  return {
    provide: {
      event: emitter.emit, // Will emit an event
      listen: emitter.on // Will register a listener for an event
    }
  }
})