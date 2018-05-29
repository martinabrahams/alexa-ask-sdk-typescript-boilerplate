import { HandlerInput, RequestHandler, SkillBuilders, BaseSkillBuilder } from "ask-sdk";
import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";

import { LaunchRequestHandler } from "./handlers/LaunchRequestHandler";
import { AmazonCancelIntentHandler } from "./handlers/AMAZON_CancelIntent_Handler";
import { AmazonStopIntentHandler } from "./handlers/AMAZON_StopIntent_Handler";
import { HelloHandler } from "./handlers/HelloHandler";
import { SessionEndedHandler } from "./handlers/SessionEndedHandler";
import { CustomErrorHandler } from "./handlers/CustomErrorHandler";


function buildLambdaSkill(): LambdaHandler {
    return SkillBuilders.standard()
    .addRequestHandlers(
        new AmazonCancelIntentHandler,
        new AmazonStopIntentHandler,
        new HelloHandler(),
        new LaunchRequestHandler(),
        new SessionEndedHandler()
    )
    .addErrorHandlers(new CustomErrorHandler())
    .lambda();
 }

 // Lambda handler - entry point for skill
 export let handler = buildLambdaSkill();
