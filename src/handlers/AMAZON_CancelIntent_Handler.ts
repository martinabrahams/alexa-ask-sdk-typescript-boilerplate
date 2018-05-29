import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class AmazonCancelIntentHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent';
    }

    handle(handlerInput: HandlerInput): Response {
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder.speak('Okay, talk to you later!')
                       .withShouldEndSession(true)
                       .getResponse();
    }   
}