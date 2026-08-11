// DRA Google Apps Script — paste this into Extensions > Apps Script, then Deploy > New deployment
// Sheet names must match exactly (case-sensitive).
var USERS_SHEET    = "Users";
var PAYMENTS_SHEET = "DRA Payments";

function doPost(e) {
  try {
    var body   = JSON.parse(e.postData.contents);
    var action = body.action;
    if (action === "signup")  return respond(handleSignup(body));
    if (action === "login")   return respond(handleLogin(body));
    if (action === "payment") return respond(handlePayment(body));
    return respond({ ok: false, error: "unknown_action" });
  } catch (err) {
    return respond({ ok: false, error: err.message || "server_error" });
  }
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(name) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  return sheet;
}

// ── Signup ────────────────────────────────────────────────────────────────────
function handleSignup(body) {
  var name         = (body.name         || "").trim();
  var email        = (body.email        || "").trim().toLowerCase();
  var phone        = (body.phone        || "").trim();
  var organisation = (body.organisation || "").trim();

  if (!name || !email || !phone) return { ok: false, error: "invalid_input" };

  var sheet = getOrCreateSheet(USERS_SHEET);
  var data  = sheet.getDataRange().getValues();

  // Ensure header row
  if (data.length === 0) {
    sheet.appendRow(["TimeStamp", "Name", "Email", "Phone", "Organisation"]);
    data = [];
  }

  // Duplicate check (email in col index 2)
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][2]).toLowerCase() === email) {
      return { ok: false, error: "already_registered" };
    }
  }

  sheet.appendRow([new Date(), name, email, phone, organisation]);
  return { ok: true };
}

// ── Login ─────────────────────────────────────────────────────────────────────
function handleLogin(body) {
  var email = (body.email || "").trim().toLowerCase();
  if (!email) return { ok: false, error: "invalid_input" };

  var sheet = getOrCreateSheet(USERS_SHEET);
  var data  = sheet.getDataRange().getValues();

  // Columns: 0=TimeStamp, 1=Name, 2=Email, 3=Phone, 4=Organisation
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][2]).toLowerCase() === email) {
      return {
        ok: true,
        user: {
          name:         String(data[i][1] || ""),
          email:        String(data[i][2] || ""),
          phone:        String(data[i][3] || ""),
          organisation: String(data[i][4] || ""),
        }
      };
    }
  }

  return { ok: false, error: "not_found" };
}

// ── Payment log ───────────────────────────────────────────────────────────────
function handlePayment(body) {
  var sheet = getOrCreateSheet(PAYMENTS_SHEET);
  var data  = sheet.getDataRange().getValues();

  // Ensure header row
  if (data.length === 0) {
    sheet.appendRow([
      "TimeStamp", "Name", "Email", "Phone",
      "Organisation", "Course", "Amount", "Currency", "OrderId", "Status"
    ]);
  }

  sheet.appendRow([
    new Date(),
    body.name         || "",
    body.email        || "",
    body.phone        || "",
    body.organisation || "",
    body.course       || "",
    body.amount       || "",
    body.currency     || "",
    body.orderId      || "",
    body.status       || "",
  ]);

  return { ok: true };
}
