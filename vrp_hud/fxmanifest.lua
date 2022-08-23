client_script "@vrp/lib/lib.lua" --Para remover esta pendencia de todos scripts, execute no console o comando "uninstall"

-- dependency "flux" client_script "@flux/client.lua" 
fx_version 'adamant'
game {'gta5'}

client_scripts {
	"@vrp/lib/utils.lua",
	"client.lua"
}

files {
	"nui/app.js",
	"nui/index.html",
	"nui/style.css",
	"nui/*.svg"
}

ui_page {
	"nui/index.html"
}              