

function Signin () {
    return (
        <div>
             <h2 className="text-xl font-bold mb-4">Sign In</h2>
              <input type="text" placeholder="Username" className="w-full p-2 border mb-3" />
              <input type="password" placeholder="Password" className="w-full p-2 border mb-3" />
              <button className="w-full bg-[#493628] text-white p-2 rounded hover:bg-[#AB886D] transition" >Login</button>
        </div>
    )
}
export default Signin;