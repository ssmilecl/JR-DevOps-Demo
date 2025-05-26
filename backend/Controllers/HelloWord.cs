using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

//create me a hello world controller as API controller
[ApiController]
[Route("api/helloword")]
public class HelloWorldController : ControllerBase
{
    [HttpGet]

    public IActionResult get()
    {
        return Ok("Hello JR Student!"); //endpoint
    }

    [HttpGet("name")]

    public IActionResult GetName(string name)
    {
        return Ok($"Hello {name}!");
    }
}