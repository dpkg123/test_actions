import hunt.http;

void main()
{
    auto server = HttpServer.builder().setListener(8080, "0.0.0.0").setHandler((RoutingContext context) {
            context.write("Hello World!");
            context.end();
        }).build();

    server.start();
}