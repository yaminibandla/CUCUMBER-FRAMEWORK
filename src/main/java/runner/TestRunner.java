package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "F:\\selenium\\CucumberFramework\\src\\main\\java\\features\\login.feature", 
			glue={"stepdefination"} 		
			)
	 
	public class TestRunner {
	 
}