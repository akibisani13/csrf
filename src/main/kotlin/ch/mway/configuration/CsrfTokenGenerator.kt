package ch.mway.configuration

import org.springframework.context.annotation.Configuration
import java.security.SecureRandom
import java.util.Base64

@Configuration
class CsrfTokenGenerator {

    private val secureRandom = SecureRandom()

    fun generateCsrfToken(): String {
        val tokenBytes = generateRandomBytes(32)
        return Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes)
    }

    private fun generateRandomBytes(length: Int): ByteArray {
        val randomBytes = ByteArray(length)
        secureRandom.nextBytes(randomBytes)
        return randomBytes
    }
}




