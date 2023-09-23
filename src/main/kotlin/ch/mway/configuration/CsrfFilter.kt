package ch.mway.configuration

import javax.servlet.*
import javax.servlet.annotation.WebFilter
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpSession

@WebFilter("/*")
class CsrfFilter : Filter {

    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        if (request is HttpServletRequest) {
            if (request.method == "POST") {
                val session: HttpSession? = request.session
                val sessionToken = session?.getAttribute("csrfToken") as? String
                val requestToken = request.getParameter("csrfToken")

                if (sessionToken == null || requestToken == null || sessionToken != requestToken) {
                    return
                }
            }
        }
        chain.doFilter(request, response)
    }

    override fun init(filterConfig: FilterConfig) {}

    override fun destroy() {}
}
