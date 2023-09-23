package ch.mway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CsrfDemoApplication

fun main(args: Array<String>) {
	runApplication<CsrfDemoApplication>(*args)
}
