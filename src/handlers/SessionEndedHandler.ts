import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class SessionEndedHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    }

    handle(handlerInput: HandlerInput): Response {
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder.getResponse();
    }   
}