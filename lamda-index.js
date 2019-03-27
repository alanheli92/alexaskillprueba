exports.handler = (event, context, callback) => {
    switch (event.request.type) {
        case "LaunchRequest":
            context.succeed(generateResponse(buildSpeechletResponse("En que puedo ayudarte", false)))
        break;
        case "IntentRequest":
            switch (event.request.intent.name) {
                case "PruebaUno":
                    context.succeed(generateResponse(buildSpeechletResponse("Si ya se la sa pa que se la pla", true)))
                break;
                case "EleganciaFrancia":
                    context.succeed(generateResponse(buildSpeechletResponse("La de Francia", true)))
                break;
                case "QueFalta":
                    context.succeed(generateResponse(buildSpeechletResponse("¡Pimienta Negra! recien molida", true)))
                break;
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