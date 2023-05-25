from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import (
    BatchSpanProcessor,
    ConsoleSpanExporter,
)
import os
from opentelemetry.sdk.resources import Resource
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter

def initialize_tracer():
    # Create a Resource instance
    resource = Resource.create({
        'service.name': 'service-name-here'
    })

    # Create a TracerProvider instance
    provider = TracerProvider(resource=resource)

    # Create an OTLP SpanExporter and BatchSpanProcessor
    span_exporter = OTLPSpanExporter(endpoint=os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT"))
    processor = BatchSpanProcessor(span_exporter)

    # Add the processor to the TracerProvider
    provider.add_span_processor(processor)

    # Register the provider as the global tracer provider
    trace.set_tracer_provider(provider)


def get_tracer(service_name):
    return trace.get_tracer(service_name)