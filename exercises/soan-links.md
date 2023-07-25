# Span Links Exercise

Building off of the material we've covered already (Span Context, SpanKind, SpanStatus, Span Attributes, & Span Events), write some code that uses the OpenTelemetry API to create a Span Link between the current active span and a _custom_ span. 

To get started:

``` typescript
const opentelemetry = require('@opentelemetry/api');

const currentSpan = opentelemetry.getActiveSpan();
```