import dotenv from 'dotenv';
dotenv.config();
const { Resource } = require('@opentelemetry/resources');

import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as otel from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter } from '@opentelemetry/tracing';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';

export const provider = new NodeTracerProvider();

const sdk = new NodeSDK({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'service-name-here',
    }),
    traceExporter: new OTLPTraceExporter(),
    instrumentations: [
        otel.getNodeAutoInstrumentations()
    ] 
});

sdk.start()