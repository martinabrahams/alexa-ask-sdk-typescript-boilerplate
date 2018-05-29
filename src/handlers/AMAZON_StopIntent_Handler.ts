import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class AmazonStopIntentHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent';
    }

    handle(handlerInput: HandlerInput): Response {
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder.speak('welcome from typescript')
                       .getResponse();
    }   
}