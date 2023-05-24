# TracerProvider Exercise

Using the concepts we just reviewed, implement a `TracerProvider` using the OpenTelemetry API in your language of choice.

To get started, here are some hints as to the libraries you'd need to use (in Typescript):

``` typescript
import { NodeTracerProvider } from '@opentelemetry/node';
import { ConsoleSpanExporter } from '@opentelemetry/tracing';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
```