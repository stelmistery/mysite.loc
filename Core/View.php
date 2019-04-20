<?php


namespace Core;


class View
{

    /**
     * Render a view file
     * @param string $view The view file
     * @return void
     */
    public static function render($view, $args = [])
    {
        extract($args, EXTR_SKIP);

        $file = "../App/Views/$view"; // Relative to core directory

        if (is_readable($file)) {
            require $file;
        } else {
            echo "File $file not found";
        }
    }

    /**
     * Render a view template using Twig
     *
     * @param string $template The template file
     * @param array $args Associative array of data to display in the view (optional)
     *
     * @return void
     */
    public static function renderTemplate($template, $args = [])
    {
        static $twig = null;

        if ($twig === null) {
            $loader = new \Twig\Loader\FilesystemLoader('../App/Views');
            $twig = new \Twig\Environment($loader, ['debug' => true]);
        }
        echo $twig->render($template, $args);
    }
}