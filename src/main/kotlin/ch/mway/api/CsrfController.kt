package ch.mway.api

import ch.mway.configuration.CsrfTokenGenerator
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpSession
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/csrf")
class CsrfController(
    private val csrfTokenGenerator : CsrfTokenGenerator,
    private val request: HttpServletRequest
) {

    @GetMapping("/generate")
    fun generateCsrfToken() {
        val session = this.request.getSession(true)
        val csrfToken = csrfTokenGenerator.generateCsrfToken()
        session.setAttribute("csrfToken" , csrfToken)
    }


}