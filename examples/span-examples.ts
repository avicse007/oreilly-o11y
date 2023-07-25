/**
 * Span Kind Slide
 */
enum SpanKind {

    // Internal spans that don't fit other communication models.
    INTERNAL = 0,
  
    // Initiated by the receiving end of a client-server interaction.
    SERVER = 1,
  
    // Initiated by the sending end of a client-server interaction.
    CLIENT = 1,
  
    // Associated with message or event production.
    PRODUCER = 3,
  
    // Associated with message or event consumption.
    CONSUMER = 4,
}
  

/** 
 * Span Status Slide
 */
interface SpanStatus {
    // The status code
    code: SpanStatusCode;
    // Optional developer facing message
    message?: string;
  }

enum SpanStatusCode {
    // Default status
    UNSET = 0,
    // Completed successfully
    OK = 1,
    // Contains an error
    ERROR = 2,
}
/** 
 * Span Attributes Slide
 */
const opentelemetry = require('@opentelemetry/api');

const currentSpan = opentelemetry.getActiveSpan();

currentSpan.set_attribute("operation.value", 1);


/** 
 * Span Events Slide
 */
//const opentelemetry = require('@opentelemetry/api');

//const currentSpan = opentelemetry.getActiveSpan();

currentSpan?.addEvent('Span Event', {
  'log.severity': 'error',
  'log.message': 'Data not found',
  'request.id': 'requestId',
});

