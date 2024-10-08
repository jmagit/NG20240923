// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class LoginTest {
  static class PageObject {
    private WebDriver driver;
    public void load() {
      driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), DesiredCapabilities.chrome());
      driver.get("http://localhost:4200/");
    }
    public Object dameUsr() {
      return driver.findElement(By.name("usr"));
    }
  }
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  private PageObject po;
  @Before
  public void setUp() throws MalformedURLException {
    driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), DesiredCapabilities.chrome());
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
    po = new PageObject()
    po.load()
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void login() {
    driver.get("http://localhost:4200/");
    driver.manage().window().setSize(new Dimension(1214, 656));
    driver.findElement(By.name("usr")).click();
    // po.dameUsr().click();

    driver.findElement(By.name("usr")).sendKeys("emp@example.com");
    driver.findElement(By.cssSelector(".btn:nth-child(1)")).click();
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".btn"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.cssSelector(".btn")).click();
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".btn:nth-child(1)"));
      assert(elements.size() > 0);
    }
  }
}
