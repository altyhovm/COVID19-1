/**
 * Theme: Appzia Admin
 * Datatable
 */
!function(a){"use strict";var t=function(){this.$dataTableButtons=a("#datatable-buttons")};t.prototype.createDataTableButtons=function(){0!==this.$dataTableButtons.length&&this.$dataTableButtons.DataTable({dom:"Bfrtip",buttons:[{extend:"copy",className:"btn-primary"},{extend:"csv",className:"btn-primary"},{extend:"excel",className:"btn-primary"},{extend:"pdf",className:"btn-primary"},{extend:"print",className:"btn-primary"}],responsive:!0})},t.prototype.init=function(){a("#datatable").dataTable(),a("#datatable-keytable").DataTable({keys:!0}),a("#datatable-responsive").DataTable(),a("#datatable-scroller").DataTable({ajax:"assets/plugins/datatables/json/scroller-demo.json",deferRender:!0,scrollY:380,scrollCollapse:!0,scroller:!0});a("#datatable-fixed-header").DataTable({fixedHeader:!0});this.createDataTableButtons()},a.DataTable=new t,a.DataTable.Constructor=t}(window.jQuery),function(a){"use strict";window.jQuery.DataTable.init()}();