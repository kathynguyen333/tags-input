  tags_input = function() {
      var e = function(e) {
          if (e.parent) {
              this.o = e;
              var t = this;
              t.type_input = e.parent.querySelector(".i-tags");
              t.tags_holder = e.parent.querySelector(".tags-holder");
              t.real_tags_input = e.parent.querySelector(".real-tags-input");
              t.type_input.addEventListener("keydown", function(e) {
                  var n = this.value;
                  13 == e.keyCode && (t.create(this.value), this.value = ""); 
                  if( e.key == "Backspace" && (n == "" || n.charCodeAt(0) == 8203) ){
                      t.remove();
                  }

              });
              e.set_tags && t.create_from_string(e.set_tags)
          }
      };
      return e.prototype.remove = function() {
          0 != this.tags_holder.getElementsByTagName("span").length && (this.tags_holder.removeChild(this.tags_holder.lastChild),this.real_tags_input.value = this.get_tags())
      }, e.prototype.create = function(e) {
          if (e.replace(/\s/g, "").length){

              var cur_val = this.real_tags_input.value.toLowerCase(),
                  tag = cur_val.split(",");

              if (tag.includes(e.toLowerCase().replace(/\s\s+/g, ' '))){
                  return;
              }

              var t = this,
                  n = dom.create("span");
              e = e.replace(/[\u00A0-\u9999<>\&]/gim, function(e) {
                  return "&#" + e.charCodeAt(0) + ";"
              }), n.innerHTML = e, n.style.opacity = 0, t.tags_holder.append(n), fadeIN(n, 400), t.real_tags_input.value = t.get_tags(), n.addEventListener("click", function() {
                  t.tags_holder.removeChild(this), t.real_tags_input.value = t.get_tags()
              })
          }
      }, e.prototype.create_from_string = function(e) {
          var t = this;
          e.split(",").forEach(function(e) {
              t.create(e)
          })
      }, e.prototype.get_tags = function() {
          var e = this.tags_holder.getElementsByTagName("SPAN");
          return e ? (str_tags = "", forEach(e, function(e) {
              str_tags += e.innerHTML + ","
          }), str_tags.slice(0, -1)) : ""
      }, e
  }()
