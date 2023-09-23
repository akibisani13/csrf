package ch.mway.content.controller

import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api")
class NameController {

    @GetMapping("/name")
    fun getName(): String {

        val name = "basnet dai"
        return "basnet dai"
    }

    @GetMapping("/saveStudent")
    fun index(model: Model): String {
        model.addAttribute("name","karan singh")
        return "index"
    }
}