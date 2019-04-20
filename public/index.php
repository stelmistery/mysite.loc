<?php
/**
 *  Front Controller
 *  PHP 7.2
 */


/**
 * Twig
 */
require_once '../vendor/autoload.php';


/*
 * Autoloader
 */
spl_autoload_register(function ($class) {
    $root = dirname(__DIR__); //get the parent directory
    $file = $root . '/' . str_replace('\\', '/', $class) . '.php';
    if (is_readable($file)) {
        require $root . '/' . str_replace('\\', '/', $class) . '.php';
    }
});

$router = new Core\Router();

/*
 * Add the routes in routes table
 */
//$router->add('', ['controller' => 'Home', 'action' => 'index']);
$router->add('validation/{controller}/{action}', ['namespace' => 'Validation']);
$router->add('{controller}/{action}');
$router->add('{controller}/{id:\d+}/{action}');
$router->add('admin/{controller}/{action}', ['namespace' => 'Admin']);
$router->add('{controller}/{action}/{page}');





$router->dispatch($_SERVER['QUERY_STRING']);