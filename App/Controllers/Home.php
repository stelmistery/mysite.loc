<?php


namespace App\Controllers;

use \Core\View;

class Home extends \Core\Controller
{
    public function indexAction($page)
    {
        switch ($page) {
            case'main':
                View::renderTemplate('Home/main.html.twig');
                break;
            case'about':
                View::renderTemplate('Home/about.html.twig');
                break;
            case'contact':
                View::renderTemplate('Home/contact.html.twig');
                break;
            case'history':
                View::renderTemplate('Home/history.html.twig');
                break;
            case'myinter':
                View::renderTemplate('Home/myinter.html.twig');
                break;
            case'photo':
                View::renderTemplate('Home/photo.html.twig');
                break;
            case'study':
                View::renderTemplate('Home/study.html.twig');
                break;
            case'test':
                View::renderTemplate('Home/test.html.twig');
                break;
        }
    }
}