function Update () {

	transform.Translate(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
 	/*transform.Rotate(Vector3(Input.GetAxis("Mouse Y"), Input.GetAxis("Mouse X"), 0) * Time.deltaTime * speed);*/
 	
 	
    // Get the mouse delta. This is not in the range -1...1
    var h : float = 2 * Input.GetAxis ("Mouse X");
    var v : float = 2 * Input.GetAxis ("Mouse Y");
    
    transform.Rotate (v, h, 0);
    

}