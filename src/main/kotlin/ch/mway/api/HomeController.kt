package ch.mway.api

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping

@Controller
class HomeController {

    @GetMapping("/home")
    fun home(): String {
        return "home.html"
    }

    @PostMapping("/saveData")
    fun home(uname: String?): String {
        println(uname)
        return "home.html"
    }

}