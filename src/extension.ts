// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('code-debugger-extension.webPanel', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'webPanel-category', // Identifies the type of the webview. Used internally
			'webPanel-title', // Title of the panel displayed to the user
			vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
			{
				enableScripts: true
			} // Webview options. More on these later.
		);
		panel.webview.postMessage({ msg: "message2" });
		panel.webview.html = getWebviewContent2();
	})
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "core-debugger-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('core-debugger-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from core-debugger-extension!');
	});

	context.subscriptions.push(disposable);
}
function getWebviewContent2() {
	return `<!doctype html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/favicon.ico">
    <link rel="canonical" href="https://getbootstrap.com/docs/3.4/examples/theme/">

    <title>Theme Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/dist/css/bootstrap.min.css"
        rel="stylesheet">
    <!-- Bootstrap theme -->
    <link href="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/dist/css/bootstrap-theme.min.css"
        rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link
        href="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/css/ie10-viewport-bug-workaround.css"
        rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/examples/theme/theme.css"
        rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script
        src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/js/ie-emulation-modes-warning.js">
    </script>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <!-- <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
        </ul>

    </div> -->
    <p id="my_p">pppp</p>
    <script>
        // Handle the message inside the webview
        window.addEventListener('message', event => {

            const message = event.data; // The JSON data our extension sent
            $("#my_p").text(message.msg);
        });
    </script>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://fastly.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"
        integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous">
    </script>
    <script>
        window.jQuery || document.write(
            '<script src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/js/vendor/jquery.min.js"><\/script>'
        )
    </script>
    <script src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/dist/js/bootstrap.min.js"></script>
    <script src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script
        src="https://fastly.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.35/assets/js/ie10-viewport-bug-workaround.js">
    </script>
</body>

</html>`;
}
// this method is called when your extension is deactivated
export function deactivate() { }
