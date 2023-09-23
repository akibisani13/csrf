package ch.mway.api

import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("demo")
@CrossOrigin(origins = [
    "http://localhost:5000"
])
class DemoController{

    @GetMapping("/getcall")
    fun getDemo(): Map<String, String> {
        return mapOf("message" to "Get Demo done!")
    }

    @PostMapping("/postcall")
    fun postDemo(@RequestBody inputString: String?): Map<String, String> {
        return if (inputString != null) {
            mapOf("message" to "Success: $inputString")
        } else {
            mapOf("message" to "Failed: Input string is null")
        }
    }
}