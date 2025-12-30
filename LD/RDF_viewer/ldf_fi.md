### https://www.ldf.fi/service/rdf-grapher
RDF grapher is a web service for parsing RDF data and visualizing it as a graph.

The service is based on Redland Raptor and Graphviz.

Supported RDF serialization formats: Turtle, RDF/XML, RDF/JSON, N-Ttriples, TriG, and N-Quads.

Supported image formats: PNG, SVG, PDF, PS, EPS, GIF, and JPG.

Usage:
http://www.ldf.fi/service/rdf-grapher?rdf=DATA_OR_URI&from=FORMAT&to=FORMAT

GET/POST parameters:

rdf	RDF data or URI
from	input serialization format (ttl, xml, json, nt, trig, nq), default: ttl
to	output image format (png, svg, pdf, ps, eps, gif, jpg), default: png
Examples:
http://www.ldf.fi/service/rdf-grapher?rdf=<http://example.com/s>+<http://example.com/p>+<http://example.com/o>+.&from=ttl&to=png

http://www.ldf.fi/service/rdf-grapher?rdf=http://dbpedia.org/resource/Suomi&from=xml&to=png

Try the service:

### link
- https://librdf.org/raptor/rapper.html
- https://github.com/dajobe/raptor
