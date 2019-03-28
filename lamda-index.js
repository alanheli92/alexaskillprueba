exports.handler = (event, context, callback) => {
    switch (event.request.type) {
        case "LaunchRequest":
            context.succeed(generateResponse(buildSpeechletResponse("En que puedo ayudarte", false)))
        break;
        case "IntentRequest":
            switch (event.request.intent.name) {
                case "VayaVaya":
                    context.succeed(generateResponse(buildSpeechletResponse("Tacubaya", false)))
                break;
                case "NoConoce":
                    context.succeed(generateResponse(buildSpeechletResponse("mejor ni vaya", false)))
                break;
                case "AjaAja":
                    context.succeed(generateResponse(buildSpeechletResponse("Y traca traca la matraca", false)))
                break;
                case "YupiYupi":
                    context.succeed(generateResponse(buildSpeechletResponse("El muñeco chuqui", false)))
                break;
                case "CuandoQuiera":
                    context.succeed(generateResponse(buildSpeechletResponse("Caigale", false)))
                break;
                case "AquiSiHay":
                    context.succeed(generateResponse(buildSpeechletResponse("Con queso las quesadillas", true)))
            }
        break;
    }
}

buildSpeechletResponse = (outputText, shouldEndSession) => {
    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        shouldEndSession: shouldEndSession
    }
}

generateResponse = (speechletResponse) => {
    return {
        version: "1.0",
        response: speechletResponse
    }
}