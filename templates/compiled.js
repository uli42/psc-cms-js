define(['hogan'], function(Hogan) {
	var partials = {};
	var templates = {};
	
		partials["SCE.Components.Teaser"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span4\">");_.b(_.v(_.d("headline.label",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("  <div class=\"span8\">");_.b(_.t(_.d("headline.input",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("    <div class=\"span4\">");_.b(_.v(_.d("text.label",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("    <div class=\"span2\">");_.b(_.t(_.d("image.input",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("    <div class=\"span6\">");_.b(_.t(_.d("text.input",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"row-fluid\">");_.b("\n" + i);_.b("  <div class=\"span4\">");_.b(_.v(_.d("link.label",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("  <div class=\"span8\">");_.b(_.t(_.d("link.input",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
		partials["SCE.layout-manager"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"psc-cms-ui-splitpane psc-cms-ui-layout-manager\">");_.b("\n" + i);_.b("  <div class=\"left\" style=\"float: left; width: 70%; height: 100%; margin-right: 1%\">");_.b("\n" + i);_.b("    <fieldset class=\"ui-corner-all ui-widget-content psc-cms-ui-group\">");_.b("\n" + i);_.b("      <div style=\"min-height: 600px\" class=\"content\"><div>");_.b("\n" + i);_.b("    </fieldset>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("\n" + i);_.b("  <div style=\"width: 29%; float: left; height: 100%\" class=\"right\">");_.b("\n" + i);_.b("    <div class=\"should-scroll\" style=\"margin-top: -7px\">");_.b("\n" + i);_.b("      <div class=\"psc-cms-ui-accordion psc-cms-ui-right-accordion right-accordion widget-not-initialized\" data-widget=\"accordion\" data-widget-options='{\"collapsible\": true, \"autoHeight\": true}'>");_.b("\n" + i);_.b("        <h3 class=\"text-und-bilder\"><a href=\"#\">Text und Bilder</a></h3>");_.b("\n" + i);_.b("        <div class=\"text-und-bilder\">");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("\n" + i);_.b("      <fieldset class=\"psc-cms-ui-group ui-corner-all ui-widget-content magic-helper\">");_.b("\n" + i);_.b("        <legend>Magic Box</legend>");_.b("\n" + i);_.b("\n" + i);_.b("        <div class=\"content\">");_.b("\n" + i);_.b("          <textarea style=\"height: 200px; width: 100%\" name=\"disabled[magic]\" class=\"textarea ui-widget-content ui-corner-all magic-box\"></textarea>");_.b("\n" + i);_.b("          <button data-widget-options=\"{}\" data-widget=\"button\" class=\"psc-cms-ui-button widget-not-initialized\">umwandeln und hinzufügen</button>");_.b("\n" + i);_.b("          <small class=\"hint\">in die Magic Box kann ein gesamter Text");_.b("\n" + i);_.b("          eingefügt werden. Der Text wird dann analysiert und automatisch in");_.b("\n" + i);_.b("          Abschnitte und Elemente unterteilt. Die neuen Elemente werden immer ans");_.b("\n" + i);_.b("          Ende des Layouts angehängt.</small>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </fieldset>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("\n" + i);_.b("  <div style=\"clear: left\"></div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
		partials["SCE.widget"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"widget ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\" style=\"margin-bottom: 5px;\">");_.b("\n" + i);_.b("  <h3 class=\"widget-header ui-helper-reset ui-state-default ui-corner-all\" style=\"padding: 0.5em 0.5em 0.5em 0.7em;\">");_.b("\n" + i);_.b("    <span class=\"ui-icon ui-icon-close\" data-bind=\"click: close\" style=\"float: right; cursor: pointer;\"></span>");_.b(_.v(_.f("headline",c,p,0)));_.b("\n" + i);_.b("  </h3>");_.b("\n" + i);_.b("  ");_.b("\n" + i);_.b("  <div class=\"widget-content\" style=\"padding: 1.1em;\">");_.b(_.t(_.f("content",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
	
	for (var id in partials) {
		templates[id] = (function(id) {
			return function(context) {
				return partials[id].render(context, partials);
			}
		})(id);
	}

	return templates;
});
