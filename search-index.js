var searchIndex = JSON.parse('{\
"tower":{"doc":"`fn(Request) -> Future<Response>`","i":[[8,"Layer","tower","Decorates a `Service`, transforming either the request or…",null,null],[16,"Service","","The wrapped service",0,null],[10,"layer","","Wrap the given service with the middleware, returning a…",0,[[]]],[8,"Service","","An asynchronous function from a `Request` to a `Response`.",null,null],[16,"Response","","Responses given by the service.",1,null],[16,"Error","","Errors produced by the service.",1,null],[16,"Future","","The future response value.",1,null],[10,"poll_ready","","Returns `Poll::Ready(Ok(()))` when the service is able to…",1,[[["context",3]],[["poll",4],["result",4]]]],[10,"call","","Process the request and return the response asynchronously.",1,[[]]],[3,"ServiceBuilder","","Declaratively construct Service values.",null,null],[0,"builder","","Builder types to compose layers and services",null,null],[3,"ServiceBuilder","tower::builder","Declaratively construct Service values.",null,null],[11,"new","","Create a new `ServiceBuilder`.",2,[[]]],[11,"layer","","Add a new layer `T` into the `ServiceBuilder`.",2,[[],[["stack",3],["servicebuilder",3]]]],[11,"into_inner","","Obtains the underlying `Layer` implementation.",2,[[]]],[11,"service","","Wrap the service `S` with the layers.",2,[[]]],[0,"layer","tower","A collection of `Layer` based tower services",null,null],[8,"Layer","tower::layer","Decorates a `Service`, transforming either the request or…",null,null],[16,"Service","","The wrapped service",0,null],[10,"layer","","Wrap the given service with the middleware, returning a…",0,[[]]],[0,"util","","`util` exports an Identity Layer and Chain, a mechanism…",null,null],[3,"Identity","tower::layer::util","A no-op middleware.",null,null],[3,"Stack","","Two middlewares chained together.",null,null],[6,"BoxError","tower","Alias for a type-erased error type.",null,null],[11,"from","tower::builder","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","tower::layer::util","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"layer","","",4,[[]]],[11,"layer","","",3,[[]]],[11,"fmt","","",4,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",3,[[["formatter",3]],[["error",3],["result",4]]]],[11,"clone","","",4,[[],["stack",3]]],[11,"clone","","",3,[[],["identity",3]]],[11,"default","","",3,[[],["identity",3]]],[11,"clone","tower::builder","",2,[[],["servicebuilder",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"new","tower::layer::util","Create a new `Identity` value",3,[[],["identity",3]]],[11,"new","","Create a new `Stack`.",4,[[],["stack",3]]]],"p":[[8,"Layer"],[8,"Service"],[3,"ServiceBuilder"],[3,"Identity"],[3,"Stack"]]},\
"tower_layer":{"doc":"Layer traits and extensions.","i":[[3,"Identity","tower_layer","A no-op middleware.",null,null],[3,"Stack","","Two middlewares chained together.",null,null],[11,"new","","Create a new `Identity` value",0,[[],["identity",3]]],[11,"new","","Create a new `Stack`.",1,[[]]],[8,"Layer","","Decorates a `Service`, transforming either the request or…",null,null],[16,"Service","","The wrapped service",2,null],[10,"layer","","Wrap the given service with the middleware, returning a…",2,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"layer","","",0,[[]]],[11,"layer","","",1,[[]]],[11,"clone","","",0,[[],["identity",3]]],[11,"clone","","",1,[[],["stack",3]]],[11,"default","","",0,[[],["identity",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]]],"p":[[3,"Identity"],[3,"Stack"],[8,"Layer"]]},\
"tower_service":{"doc":"Definition of the core `Service` trait to Tower","i":[[8,"Service","tower_service","An asynchronous function from a `Request` to a `Response`.",null,null],[16,"Response","","Responses given by the service.",0,null],[16,"Error","","Errors produced by the service.",0,null],[16,"Future","","The future response value.",0,null],[10,"poll_ready","","Returns `Poll::Ready(Ok(()))` when the service is able to…",0,[[["context",3]],[["result",4],["poll",4]]]],[10,"call","","Process the request and return the response asynchronously.",0,[[]]]],"p":[[8,"Service"]]},\
"tower_test":{"doc":"Mock `Service` that can be used in tests.","i":[[0,"mock","tower_test","Mock `Service` that can be used in tests.",null,null],[3,"Mock","tower_test::mock","A mock service",null,null],[3,"Handle","","Handle to the `Mock`.",null,null],[3,"SendResponse","","Send a response in reply to a received request.",null,null],[5,"spawn_layer","","Spawn a layer onto a mock service.",null,[[]]],[5,"spawn","","Spawn a Service onto a mock task.",null,[[]]],[5,"spawn_with","","Spawn a Service via the provided wrapper closure.",null,[[]]],[5,"pair","","Create a new `Mock` and `Handle` pair.",null,[[]]],[0,"error","","Error types",null,null],[3,"Closed","tower_test::mock::error","Error yielded when a mocked service does not yet accept…",null,null],[0,"future","tower_test::mock","Future types",null,null],[3,"ResponseFuture","tower_test::mock::future","Future of the `Mock` response.",null,null],[0,"spawn","tower_test::mock","Spawn mock services onto a mock task.",null,null],[3,"Spawn","tower_test::mock::spawn","Service spawned on a mock task",null,null],[11,"new","","Create a new spawn.",0,[[]]],[11,"is_woken","","Check if this service has been woken up.",0,[[]]],[11,"waker_ref_count","","Get how many futurs are holding onto the waker.",0,[[]]],[11,"poll_ready","","Poll this service ready.",0,[[],[["result",4],["poll",4]]]],[11,"call","","Call the inner Service.",0,[[]]],[11,"into_inner","","Get the inner service.",0,[[]]],[11,"get_ref","","Get a reference to the inner service.",0,[[]]],[11,"get_mut","","Get a mutable reference to the inner service.",0,[[]]],[11,"poll_request","tower_test::mock","Asynchronously gets the next request",1,[[],[["poll",4],["option",4]]]],[11,"next_request","","Gets the next request.",1,[[]]],[11,"allow","","Allow a certain number of requests",1,[[]]],[11,"send_error","","Make the next poll_ method error with the given error.",1,[[["into",8],["box",3]]]],[11,"send_response","","Resolve the pending request future for the linked request…",2,[[]]],[11,"send_error","","Resolve the pending request future for the linked request…",2,[[["into",8],["box",3]]]],[14,"assert_request_eq","tower_test","Asserts that the mock handle receives a new request equal…",null,null],[11,"from","tower_test::mock","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","tower_test::mock::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","tower_test::mock::future","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"into_future","","",5,[[]]],[11,"try_poll","","",5,[[["pin",3],["context",3]],["poll",4]]],[11,"from","tower_test::mock::spawn","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"drop","tower_test::mock","",3,[[]]],[11,"drop","","",1,[[]]],[11,"clone","tower_test::mock::spawn","",0,[[]]],[11,"clone","tower_test::mock","",3,[[]]],[11,"fmt","tower_test::mock::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","tower_test::mock::future","",5,[[["formatter",3]],["result",6]]],[11,"fmt","tower_test::mock::spawn","",0,[[["formatter",3]],["result",6]]],[11,"fmt","tower_test::mock","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","tower_test::mock::error","",4,[[["formatter",3]],["result",6]]],[11,"poll","tower_test::mock::future","",5,[[["context",3],["pin",3]],["poll",4]]],[11,"poll_ready","tower_test::mock","",3,[[["context",3]],[["result",4],["poll",4]]]],[11,"call","","",3,[[]]]],"p":[[3,"Spawn"],[3,"Handle"],[3,"SendResponse"],[3,"Mock"],[3,"Closed"],[3,"ResponseFuture"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);