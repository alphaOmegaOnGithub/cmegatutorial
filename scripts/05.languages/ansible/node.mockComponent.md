node.mockComponent subtypeof nodes.SoftwareComponent that runs on a server / is located on server by a Path property of type string and has an attribute of type String of name ID ! 

nodes.MockServer subtypeof MockComponent has interface Standard  of type tosca.interfaces.lifecycle.Standard 
	with operations create  with inputs param: path ) 
	having implementation playbook/mock-server/create.yaml

   nodes.Mockclient subtypeof 
     derived_from MockComponent 
       interfaces: 
	     Standard.
	       type: tosca.interfaces.lifecycle.Standard 
	       inputs: 	 
		     path: { value: {get_property: [SELF, server, id] }, type: string } 
           operations: 
		     create: 
			   implementation playbook/mock-client/create.yaml
		     configure:
		       inputs:
			     server_id: { value: {get_attribute: [SELF, server, id] }, type: string }
		       implementation playbook/mock-server/create.yaml
   requirements:
     - server:
	     capability: tosca.capabilityies.Node
         relationship: my.relationships..MockServerClient		 
   
   topology_types:
     my.relationships.MockServerClient
	   derived_from: tosca.relationships.DependsOn
	   valid_targets: [ tosca.capabilityies.Node ]
   
   topology_template:
     node_templates:
	   my_workstation:
	     type: tosca:nodes.Compute
		 attributes:
		   private_address: local_host
		   public_address:  local_host
		   
      my_mock-server:
	    type: my.nodes..MockServer
		properties:
		  path: /tmp/playing/opera/02/server
		requirements: 
		  - host: my-workstation
		  
	  
	  my_mock-client: 
	    type: my.nodes..MockClient
		properties:
		  path: /tmp/playing/opera/02/client
		requirements: 
		  - host: my-workstation
		  - server: my_mock-server
		  
		   