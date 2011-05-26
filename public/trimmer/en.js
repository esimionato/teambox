if(typeof(I18n) == 'undefined') { I18n = {}; };
I18n.translations = ({"common":{"comment":{"one":"%{count} comment","other":"%{count} comments"},"in_project":"in","rename":"Rename","and":"and","format_name":"%{first_name} %{last_name}","accept":"Accept","edit":"Edit","cancel":"Cancel","delete":"Delete","close":"Close","show_more":"Show more","or":"or","print":"Print this page","signup":"Sign up","format_name_short":"%{first_name_first_character}. %{last_name}","decline":"Decline","loading":"Loading...","saving":"Saving","download_as_csv":"Download as CSV","save":"Save","not_allowed":"You are not allowed to do that!","next":"Next","gantt_chart":"Gantt Chart","logged_out":"You were logged out","calendar":"Calendar","prev":"Previous"},"comments":{"new":{"assigned_to_nobody":"Unassigned"}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%I:%M %p","long":"%B %d, %Y %H:%M"},"pm":"pm"},"date":{"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"yesterday":"Yesterday","order":["year","month","day"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},"tasks":{"new":{"submit":"Add Task","title":"New Task","sending":"Creating the task\u2026"},"due_on":{"today":"Today","due_on":"Due on","tomorrow":"Tomorrow","undefined":"No due date"},"edit":{"submit":"Update Task","sending":"Updating the task\u2026"},"archive_box":{"you_are_done":"It looks like you're done with this task!","archive":"Archive this task","reopen":"Reopen this task"},"errors":{"name":{"cant_be_blank":"must not be blank","too_long":"must be shorter than 255 characters"}},"overdue":"%{days} days late","fields":{"assigned_to_nobody":"Nobody","assigned_to":"Who is responsible?","body_html":"What needs to be done? <i>optional</i>","optional":"You can provide better instructions for this Task below.","title":"New Task","due_on_html":"Needs to be done before... <i>optional</i>","name_html":"Enter a Task title <i>eg. Upload Logo Proposal</i>","task":"Choose an actionable task. The more specific, the better."},"assigned":{"assigned_to":"Assigned to %{user}","unassigned":"Cleared the assigned user","myself":"Assign to myself (%{user})"},"destroy_message":{"deleted_html":"The Task <b>%{name}</b> was successfully deleted!"},"my_tasks":{"my_tasks":"My tasks for all projects"},"task":{"edit":"Edit title","full_view":"Full view"},"show":{"title":"Task: %{name}"},"overview_box":{"title":"This task","status":"Status"},"link":{"new":"+ Add Task","edit":"Edit","hide_archived_tasks":{"one":"Hide 1 archived task","other":"Hide %{count} archived tasks"}},"create":"Add Task","status":{"new":"new","open":"open","resolved":"resolved","hold":"hold","rejected":"rejected"},"archive_message":{"archived_html":"The Task <b>%{name}</b> was successfully archived!"},"unarchive_box":{"task_is_closed":"This task is closed and archived","unarchive":"Unarchive","reopen":"Reopen this task"}},"roles":{"participant":"participant","observer":"observer","admin":"admin","commenter":"commenter"},"datetime":{"time_ago":"%{time_ago_in_words} ago","prompts":{"minute":"Minute","month":"Month","second":"Second","hour":"Hour","day":"Day","year":"Year"},"distance_in_words":{"now":"now","less_than_x_minutes":{"one":"now","other":"less than %{count} minutes"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_seconds":{"one":"now","other":"now"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"less_than_x_seconds":{"one":"now","other":"now"},"x_months":{"one":"1 month","other":"%{count} months"},"x_minutes":{"one":"one minute","other":"%{count} minutes"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"half_a_minute":"half a minute"}},"calendar":{"now":"Now","today":"Today","clear":"Clear","ok":"OK","abbr_weekdays":["S","M","T","W","T","F","S"]}});
Templates = ({"task_list_templates":{"form_task":"<li>\n  <div class='text_field'>\n    <img alt=\"Drag\" class=\"drag\" src=\"/images/drag.png?1305238352\" />\n    <input name='task_list_template[titles][]' placeholder='Task name' type='text' value='{{title}}'>\n    <input name='task_list_template[descs][]' placeholder='Description' type='text' value='{{desc}}'>\n  </div>\n</li>\n","template":"<div class='task_list_templates' data-id='{{id}}' data-organization='{{organization}}' id='task_list_template_{{id}}'>\n  <div class='data'>\n    <div class='actions'>\n      <a class='trash_icon' href='#'></a>\n      <a class='edit_icon' href='#'></a>\n    </div>\n    <img alt=\"Drag\" class=\"drag\" src=\"/images/drag.png?1305238352\" />\n    <span class='name'>{{name}}</span>\n    <ul>\n      {{#tasks}}\n      <li>\n        Task:\n        <span class='title'>{{title}}</span>\n        <div class='desc'>{{desc}}</div>\n      </li>\n      {{/tasks}}\n    </ul>\n  </div>\n</div>\n","form":"<form action='{{path}}' class='{{action}}_task_list_template task_list_template_form app_form' data-remote='true' method='post'>\n  <h3>Task List Template</h3>\n  <p>A task list template is a set of common tasks you can repeatedly create task lists from.</p>\n  <input name='_method' type='hidden' value='{{verb}}'>\n  <div class='name text_field'>\n    <label for='task_list_template[name]'>\n      Template name <i>eg. Design process</i>\n    </label>\n    <input name='task_list_template[name]' type='text' value='{{name}}'>\n  </div>\n  <h4>Tasks</h4>\n  <ul id='template_tasks'>\n    {{#tasks}}\n    <li>\n      <div class='text_field'>\n        <img alt=\"Drag\" class=\"drag\" src=\"/images/drag.png?1305238352\" />\n        <input name='task_list_template[titles][]' placeholder='Task name' type='text' value='{{title}}'>\n        <input name='task_list_template[descs][]' placeholder='Description' type='text' value='{{desc}}'>\n      </div>\n    </li>\n    {{/tasks}}\n  </ul>\n  <input data-disable-with='Saving' type='submit' value='Save'>\n  <a class='cancel' href='#'>Cancel</a>\n</form>\n"},"primers":{"today":"<div class='primer_wrapper'>\n  <div class='primer'>\n    <h2>Your tasks for Today</h2>\n    <p>Here you will find tasks that you need to do today and overdue tasks assigned to you.</p>\n  </div>\n</div>\n","my_tasks":"<div class='primer_wrapper'>\n  <div class='primer'>\n    <h2>My Tasks</h2>\n    <p>Here you will find all tasks assigned to you.</p>\n  </div>\n</div>\n","all_tasks":"<div class='primer_wrapper'>\n  <div class='primer'>\n    <h2>All Tasks across projects</h2>\n    <p>This screen will list all tasks in all your projects.</p>\n    <p>It's a great place to keep track of what everybody needs to do.</p>\n  </div>\n</div>\n"},"projects":{"index":"<h2>My Projects</h2>\n<div class='projects_pane'>\n  {{#organizations}}\n  <h4>\n    <a href='/organizations/{{permalink}}'>\n      {{name}}\n    </a>\n  </h4>\n  <div class='projects'>\n    {{#active_projects}}\n    <p class='project'>\n      <a href='{{url}}'>{{name}}</a>\n      <span class='status'>\n        {{my_role}}\n        {{#admin}}\n        <a href='/projects/{{permalink}}/settings'>\n          (settings)\n        </a>\n        {{/admin}}\n      </span>\n    </p>\n    {{/active_projects}}\n    {{^active_projects}}\n    <p class='none'>There are no active projects in this organization.</p>\n    {{/active_projects}}\n    {{#has_archived_projects}}\n    <p>\n      <a class='show_archived' href='#'>\n        Show {{count}} archived projects\n      </a>\n    </p>\n    <div class='archived_projects' style='display: none'>\n      {{#projects}}\n      <p class='project'>\n        <a href='/projects/{{permalink}}'>\n          {{name}}\n        </a>\n      </p>\n      {{/projects}}\n    </div>\n    {{/has_archived_projects}}\n  </div>\n  {{/organizations}}\n</div>\n","overlay":"{{#project}}\n<div class='overlay'>\n  <p class='title'>\n    <a href='#!/projects/{{permalink}}'>\n      {{name}}\n    </a>\n  </p>\n  <div class='sections'>\n    <p>\n      <a class='recent_activity' href='#!/projects/{{permalink}}'>\n        Recent activity\n      </a>\n    </p>\n    <p>\n      <a class='conversations' href='#!/projects/{{permalink}}/conversations'>\n        Conversations\n      </a>\n    </p>\n    <p>\n      <a class='tasks' href='#!/projects/{{permalink}}/task_lists'>\n        Tasks\n      </a>\n    </p>\n    <p>\n      <a class='pages' href='#!/projects/{{permalink}}/pages'>\n        Pages\n      </a>\n    </p>\n    <p>\n      <a class='files' href='#!/projects/{{permalink}}/uploads'>\n        Files\n      </a>\n    </p>\n    <p>\n      <a class='people' href='#!/projects/{{permalink}}/people'>\n        People &amp; Permissions\n      </a>\n    </p>\n  </div>\n</div>\n{{/project}}\n"},"tasks":{"my_task":"<div class='el task {{task_classes}}' id='my_task_{{task_id}}'>\n  <a href='{{task_url}}'>{{task_name}}</a>\n  <span class='due_on'>{{task_due}}</span>\n</div>\n","index":"<a href=\"/task_lists.print\" class=\"print_link\">Print this page</a>\n<div id='tasks_for_all_projects'>\n  <div class='task_list'>\n    <div class='tasks'></div>\n  </div>\n</div>\n"},"conversations":{"new":"<h2>New Conversation</h2>\n<form class='new_comment new_conversation'>\n  <div style='margin:0;padding:0;display:inline'>\n    <input name=\"utf8\" type=\"hidden\" value=\"\u2713\">\n    <input name=\"_method\" type=\"hidden\" value=\"put\">\n  </div>\n  <div class='field text_area'>\n    <a class='micro_avatar my_avatar'></a>\n    <div class='textarea'>\n      <textarea cols=\"40\" name=\"task[comments_attributes][0][body]\" placeholder=\"Define what needs to be done, assign this task to somebody.\" rows=\"20\" autocomplete=\"off\" style=\"\"></textarea>\n      <div class='autocomplete' style='display: none'></div>\n    </div>\n  </div>\n  <div class='extra' style='display: none'>\n    <div class='upload_area' style='display: none'>\n      <p>Select a file to upload to Teambox</p>\n      <input id=\"upload_file\" name=\"task[comments_attributes][0][uploads_attributes][0][asset]\" type=\"file\">\n    </div>\n    <div class='actions'>\n      <div class='attach'>\n        <span>Attach</span>\n        <a href=\"#uploads\" class=\"attach_icon hoverable\" title=\"Attach a file\">Attachment</a>\n        <div class='google_docs_attachment'>\n          <a href='/google_docs' rel='facebox'>\n            <img alt=\"Icon_6_document\" class=\"google_docs_logo\" src=\"/images/google_docs/icon_6_document.gif\">\n          </a>\n          <div class='google_docs_attachment_form_area' data-object-name='task[comments_attributes][0]'>\n            <div class='fields'></div>\n            <ul class='file_list'></ul>\n          </div>\n        </div>\n        <a href=\"#watchers\" class=\"add_watchers hoverable\" title=\"Notify people\">Watchers</a>\n      </div>\n      <span class='new' style='display: none'>\n        \u2190 &nbsp;&nbsp; Select <b>Notify people</b> to send notifications for this conversation.\n      </span>\n    </div>\n    <div class='submit'>\n      <span class='help'>\n        <a href=\"/text_styles\" class=\"style_icon\" rel=\"facebox\" title=\"Formatting help\"></a>\n      </span>\n      <input data-disable-with=\"Sending\u2026\" id=\"task[comments_attributes][0]_submit\" name=\"commit\" type=\"submit\" value=\"Save\">\n    </div>\n  </div>\n</form>\n","show":""},"first_steps":{"progress_bar":"<div class='completion'>\n  {{text}}\n  <div class='progressbar thin orange' style='width: {{width}}px'>\n    <div class='bar1' style='width: {{filled}}px'></div>\n    <div class='bar2' style='width: {{filled}}px'></div>\n    <div class='bar3' style='width: {{filled}}px'></div>\n  </div>\n</div>\n","overview":"<div class='first_steps'>\n  <h2>Your first steps in Teambox</h2>\n  <div class='steps'>\n    <img alt=\"1-disabled\" data-name=\"first_project\" data-step=\"1\" src=\"/images/badges/1-disabled.jpg?1305238382\" />\n    <img alt=\"5-disabled\" data-name=\"first_invite\" data-step=\"5\" src=\"/images/badges/5-disabled.jpg?1305238382\" />\n    <img alt=\"2-disabled\" data-name=\"first_conversation\" data-step=\"2\" src=\"/images/badges/2-disabled.jpg?1305238382\" />\n    <img alt=\"3-disabled\" data-name=\"first_task\" data-step=\"3\" src=\"/images/badges/3-disabled.jpg?1305238382\" />\n    <img alt=\"4-disabled\" data-name=\"first_page\" data-step=\"4\" src=\"/images/badges/4-disabled.jpg?1305238382\" />\n  </div>\n  <div class='step step1' style='display: none'>\n    <h3>Create your first project</h3>\n    <p>Congratulations! You're our newest user.</p>\n    <p>It's time to create your first project and get things done.</p>\n    <p>To create a project, click on \"New Project\" in the sidebar.</p>\n  </div>\n  <div class='step step1-complete' style='display: none'>\n    <h3>You already have your first project</h3>\n    <p>You can create more projects at any time!</p>\n  </div>\n  <div class='step step2' style='display: none'>\n    <h3>Post your first conversation</h3>\n    <p>It's time to communicate with your team.</p>\n    <p>\n      In Teambox you can post a comment on any project\n      and your colleagues can read and reply.\n    </p>\n    <p>Create a conversation in a project from your Recent Activity or Conversations.</p>\n  </div>\n  <div class='step step2-complete' style='display: none'>\n    <h3>You already created your first conversation</h3>\n    <p>Use conversations to discuss anything, anytime, with your team.</p>\n  </div>\n  <div class='step step3' style='display: none'>\n    <h3>Create your first task</h3>\n    <p>\n      You can create tasks for yourself and anyone on your team.\n      Tasks include due dates, time tracking and commenting.\n    </p>\n    <p>Select tasks from any project and create a task list to get started.</p>\n  </div>\n  <div class='step step3-complete' style='display: none'>\n    <h3>You already created some tasks</h3>\n    <p>Use tasks to keep track of what needs to be done and focus on what you need to do next.</p>\n  </div>\n  <div class='step step4' style='display: none'>\n    <h3>Create your first page</h3>\n    <p>Each project has a space to document and share. It's called Pages, and you can build as many as you need.</p>\n    <p>Share reference information, phone numbers, notes, proposals.</p>\n    <p>Get started by going to a project's pages and creating one.</p>\n  </div>\n  <div class='step step4-complete' style='display: none'>\n    <h3>You already created a Page</h3>\n    <p>Use pages from now on to share and collaborate over reference information.</p>\n  </div>\n  <div class='step step5' style='display: none'>\n    <h3>Invite your team to your projects</h3>\n    <p>It's easy to invite your whole team to your projects.</p>\n    <p>You can create projects for each workgroup: Finance, Development, sub-contractors, client projects, etc.</p>\n    <p>To invite users, click on the project in the sidebar, go to People and enter your team member's emails.</p>\n  </div>\n  <div class='step step5-complete' style='display: none'>\n    <h3>Your first invites have been sent</h3>\n    <p>Only people you grant access will be able to access your projects.</p>\n  </div>\n  <div class='step completed'>\n    <h3>Initiation complete!</h3>\n    <p>You have completed all your first steps. For more tips, click on the little light bulb next to your user name at the top of the screen.</p>\n    <p>\n      <a href='http://twitter.com/teambox_app' target='_blank'>Follow us on Twitter</a>\n    </p>\n    <p>\n      <a class='close_first_steps' href='#'>\n        [ Close this first steps guide ]\n      </a>\n    </p>\n  </div>\n</div>\n"},"activities":{"page_create":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      created the page\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n      <span class='project'>\n        in the project\n        {{#project}}\n        <a href='{{url}}'>{{name}}</a>\n        {{/project}}\n      </span>\n    </p>\n  </div>\n</div>\n","note_create":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      created the note\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n      <span class='project'>\n        in\n        {{#target}}{{#page}}\n        <a href='{{url}}'>{{name}}</a>\n        {{/page}}{{/target}}\n        {{#project}}\n        <a href='{{url}}'>({{name}})</a>\n        {{/project}}\n      </span>\n    </p>\n  </div>\n</div>\n","task_list_create":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      created the task list\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n      <span class='project'>\n        in the project\n        {{#project}}\n        <a href='{{url}}'>{{name}}</a>\n        {{/project}}\n      </span>\n    </p>\n  </div>\n</div>\n","project_create":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      created the project\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n    </p>\n  </div>\n</div>\n","note_edit":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      edited the note\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n      <span class='project'>\n        in\n        {{#target}}{{#page}}\n        <a href='{{url}}'>{{name}}</a>\n        {{/page}}{{/target}}\n        {{#project}}\n        <a href='{{url}}'>({{name}})</a>\n        {{/project}}\n      </span>\n    </p>\n  </div>\n</div>\n","page_edit":"<div class='activity'>\n  {{#user}}\n  <a href=\"{{url}}\" class=\"micro_avatar\" style=\"background: url({{micro_avatar_url}}) no-repeat\"></a>\n  {{/user}}\n  <div class='activity_block'>\n    <div class='date'>\n      <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n        {{time_ago updated_at}}\n      </time>\n    </div>\n    <p>\n      {{#user}}\n      <a href='{{url}}'>{{full_name}}</a>\n      {{/user}}\n      edited the page\n      {{#target}}\n      <a href='{{url}}'>{{name}}</a>\n      {{/target}}\n      <span class='project'>\n        in the project\n        {{#project}}\n        <a href='{{url}}'>{{name}}</a>\n        {{/project}}\n      </span>\n    </p>\n  </div>\n</div>\n"},"badges":{"first_task":"<div class='overlay_badge'>\n  <img src='/images/badges/3.jpg'>\n  <div class='text'>\n    <h2>Your first Task!</h2>\n    <p>\n      <strong>Keep track</strong> of what needs to be done and delegate tasks to your team.\n    </p>\n    <p>\n      Stay on top of your tasks inside each Project. You'll never miss a deadline!\n    </p>\n  </div>\n  <div class='clear'></div>\n</div>\n","first_page":"<div class='overlay_badge'>\n  <img src='/images/badges/4.jpg'>\n  <div class='text'>\n    <h2>Your first Page!</h2>\n    <p>\n      A <strong>shared place</strong> to post important notes for your team.\n    </p>\n    <p>\n      Use pages to keep your information in one place: documents, reference, etc.\n    </p>\n  </div>\n  <div class='clear'></div>\n</div>\n","first_project":"<div class='overlay_badge'>\n  <img src='/images/badges/1.jpg'>\n  <div class='text'>\n    <h2>Let's get started!</h2>\n    <p>\n      Your first project is ready. Projects are a shared space for discussions, tasks and files.\n    </p>\n    <p>\n      Next, invite users and start collaborating.\n    </p>\n  </div>\n  <div class='clear'></div>\n</div>\n","first_invite":"<div class='overlay_badge'>\n  <img src='/images/badges/5.jpg'>\n  <div class='text'>\n    <h2>Invitations sent!</h2>\n    <p>\n      You just sent your contacts an email to join your project.\n      Teambox is private and secure and only project members can see your content.\n    </p>\n    <p>\n      Tip: Create a project for each workgroup you're involved with,\n      and send each member an invitation.\n    </p>\n  </div>\n  <div class='clear'></div>\n</div>\n","first_conversation":"<div class='overlay_badge'>\n  <img src='/images/badges/2.jpg'>\n  <div class='text'>\n    <h2>Your first Conversation!</h2>\n    <p>\n      This is your first step in the way to better team communication.\n      Conversations are the best way to discuss with your team.\n    </p>\n    <p>\n      Use conversations as a smart replacement of emails: faster and more transparent.\n    </p>\n  </div>\n  <div class='clear'></div>\n</div>\n"},"partials":{"comment":"<div class='comment' data-editable-before='{{ms updated_at}}' data-project='{{project_id}}' data-user='{{user_id}}' id='comment_{{id}}'>\n  <div class='info'>\n    {{#user}}\n    <a class='micro_avatar' href='{{url}}' style='background: url({{micro_avatar_url}}) no-repeat'></a>\n    {{/user}}\n  </div>\n  <div class='block'>\n    <div class='actions_menu'>\n      <span class='actiondate'>\n        <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n          {{time_ago updated_at}}\n        </time>\n      </span>\n    </div>\n    <div class='body textilized'>\n      <div class='before'>\n        {{#user}}\n        <a class='user' href='{{url}}'>\n          {{full_name}}\n        </a>\n        {{/user}}\n        <!-- TODO: due on transition -->\n        <!-- TODO: hours logged for time tracking -->\n        {{status_transition}}\n      </div>\n      {{#assigned}}\n      <p class='assigned_transition'>Assigned to {{full_name user}}</p>\n      {{/assigned}}\n      {{{body_html}}}\n      <!-- TODO: uploads -->\n      <!-- TODO: google docs -->\n    </div>\n  </div>\n  <div class='clear'></div>\n</div>\n","thread":"<div class='comment comment_header'>\n  <span class='time'>\n    <time class='timeago' data-msec='{{ms updated_at}}' pubdate='true'>\n      {{updated_at}}\n    </time>\n  </span>\n  <div class='info'>\n    {{#if is_task}}\n    <img src='/famfamfam/tick.png' style='padding: 4px'>\n    {{else}}\n    <img src='/famfamfam/comment.png' style='padding: 4px'>\n    {{/if}}\n    <div class='comment_count'>\n      <span>{{comments_count}}</span>\n    </div>\n  </div>\n  <div class='block'>\n    <div class='thread_title'>\n      {{#if is_task}}\n      <a href=\"{{url}}\">{{name}}</a> on\n      {{#task_list}}\n      <a href=\"{{url}}\">{{name}}</a>\n      {{/task_list}}\n      task list\n      {{else}}\n      <a href=\"{{url}}\">{{name}}</a>\n      conversation\n      {{/if}}\n    </div>\n    {{#project}}\n    <div class='project_overlay'>\n      <a href=\"{{url}}\" data-project-id=\"{{id}}\">{{name}}</a>\n    </div>\n    {{/project}}\n    {{#if is_task}}\n    <div class='task_summary'>\n      {{status_transition}}\n      Assigned to {{full_name user}}\n    </div>\n    {{/if}}\n    {{#last_comment}}\n    <p class='excerpt'>\n      <strong>{{full_name user}}</strong>\n      {{body}}\n    </p>\n    {{/last_comment}}\n  </div>\n  <div class='clear'></div>\n</div>\n<div class='comments'>\n  {{#first_comment}}{{> comment}}{{/first_comment}}\n  {{#if hidden_comments_count}}\n  <div class='more_comments'>\n    <a data-remote='true' href='/activities/{{id}}/show_thread?thread_type={{type}}'></a>\n    Show {{hidden_comments_count}} previous comments\n  </div>\n  {{/if}}\n  {{#recent_comments}}{{> comment}}{{/recent_comments}}\n</div>\n","loading":"<div class='loading_box'>\n  <img src=\"/images/loading.gif\">\n  Loading...\n</div>\n","comment_form":"<div style='margin:0;padding:0;display:inline'>\n  <input name=\"utf8\" type=\"hidden\" value=\"\u2713\">\n  <input name=\"_method\" type=\"hidden\" value=\"put\">\n</div>\n<div class='field text_area'>\n  <a class='micro_avatar my_avatar'></a>\n  <div class='textarea'>\n    <textarea cols=\"40\" name=\"task[comments_attributes][0][body]\" placeholder=\"Define what needs to be done, assign this task to somebody.\" rows=\"20\" autocomplete=\"off\" style=\"\"></textarea>\n    <div class='autocomplete' style='display: none'></div>\n  </div>\n</div>\n<div class='extra' style='display: none'>\n  {{#if task_list}}\n  <div class='field text_field hours_field' style='display: none'>\n    <label>\n      How many hours did you put into this task?\n      <input id=\"task_comments_attributes_0_human_hours\" name=\"task[comments_attributes][0][human_hours]\" size=\"30\" type=\"text\">\n    </label>\n    <a href=\"http://help.teambox.com/faqs/advanced-features/time-tracking\" target=\"_blank\">Learn more.</a>\n  </div>\n  {{/if}}\n  <div class='upload_area' style='display: none'>\n    <p>Select a file to upload to Teambox</p>\n    <input id=\"upload_file\" name=\"task[comments_attributes][0][uploads_attributes][0][asset]\" type=\"file\">\n  </div>\n  <div class='actions'>\n    <div class='attach'>\n      <span>Attach</span>\n      <a href=\"#uploads\" class=\"attach_icon hoverable\" title=\"Attach a file\">Attachment</a>\n      <div class='google_docs_attachment'>\n        <a href='/google_docs' rel='facebox'>\n          <img alt=\"Icon_6_document\" class=\"google_docs_logo\" src=\"/images/google_docs/icon_6_document.gif\">\n        </a>\n        <div class='google_docs_attachment_form_area' data-object-name='task[comments_attributes][0]'>\n          <div class='fields'></div>\n          <ul class='file_list'></ul>\n        </div>\n      </div>\n      {{#if is_task}}\n      <a href=\"#hours\" class=\"add_hours_icon hoverable\" title=\"Log hours\">Add hours to this task</a>\n      {{/if}}\n      <a href=\"#watchers\" class=\"add_watchers hoverable\" title=\"Notify people\">Watchers</a>\n    </div>\n    {{#if is_task}}\n    <div class='task_actions'>\n      <label for=\"task_status\">Status</label>\n      <select id='task_status' name='task[status]'>\n        <!-- TODO: Choose the right selected option -->\n        <option value=\"0\">new</option>\n        <option value=\"1\" selected=\"selected\">open</option>\n        <option value=\"2\">hold</option>\n        <option value=\"3\">resolved</option>\n        <option value=\"4\">rejected</option>\n      </select>\n      <label for=\"task_assigned_id\">Assigned to:</label>\n      <select data-assigned='{{assigned_id}}' id='task_assigned_id' name='task[assigned_id]'>\n        <option>Unassigned</option>\n      </select>\n      <label for=\"task_due_on\">Due date</label>\n      <div class='date_picker'>\n        <img alt=\"Calendar\" class=\"calendar_date_select_popup_icon\" src=\"/images/calendar_date_select/calendar.gif\">\n        <input id=\"task_due_on\" name=\"task[due_on]\" type=\"hidden\">\n        <span class=\"localized_date\"><i>No date assigned</i></span>\n      </div>\n    </div>\n    {{else}}\n    <span class='convert_to_task'>\n      <a href=\"#convert_to_task\">Convert to task</a>\n    </span>\n    <div class='convert_to_task' style='display:none'>\n      <div class='conversation_actions'>\n        <div class='fields'>\n          <label for=\"conversation_name\">Name this task:</label>\n          <input class=\"required\" disabled=\"disabled\" error_message=\"must not be blank\" id=\"conversation_name\" name=\"conversation[name]\" placeholder=\"eg. Upload Logo Proposal\" size=\"30\" type=\"text\" value=\"Project Welcome\">\n        </div>\n        <div class='fields'>\n          <label for=\"conversation_task_list_id\">Create task in:</label>\n          <select disabled=\"disabled\" id=\"conversation_task_list_id\" name=\"conversation[task_list_id]\"> <option value=\"\">Loading...</option> </select>\n        </div>\n        <div class='fields'>\n          <label for=\"conversation_status\">Status:</label>\n          <select disabled=\"disabled\" id=\"conversation_status\" name=\"conversation[status]\"> <option value=\"0\">new</option> <option value=\"1\">open</option> <option value=\"2\">hold</option> <option value=\"3\">resolved</option> <option value=\"4\">rejected</option> </select>\n          <select disabled=\"disabled\" id=\"conversation_assigned_id\" name=\"conversation[assigned_id]\"> <option>Unassigned</option> <option value=\"1\">Frank Kramer</option> <option value=\"2\">Corrina Kottke</option> <option value=\"5\">Marco Fizzulo</option> </select>\n        </div>\n        <div class='fields'>\n          <div class='date_picker'>\n            <img alt=\"Calendar\" class=\"calendar_date_select_popup_icon\" src=\"/images/calendar_date_select/calendar.gif\">\n            <input disabled=\"disabled\" id=\"conversation_due_on\" name=\"conversation[due_on]\" type=\"hidden\">\n            <span class=\"localized_date\"><i>No date assigned</i></span>\n          </div>\n        </div>\n      </div>\n      <div class='submit'>\n        <a href=\"#cancel_conversion\" class=\"cancel\">Cancel</a>\n        <input data-disable-with=\"Sending\u2026\" disabled=\"disabled\" id=\"comment_submit\" name=\"commit\" type=\"submit\" value=\"Convert\">\n      </div>\n    </div>\n    {{/if}}\n    <span class='new' style='display: none'>\n      \u2190 &nbsp;&nbsp; Select <b>Notify people</b> to send notifications for this conversation.\n    </span>\n  </div>\n  <div class='submit'>\n    <span class='help'>\n      <a href=\"/text_styles\" class=\"style_icon\" rel=\"facebox\" title=\"Formatting help\"></a>\n    </span>\n    <input data-disable-with=\"Sending\u2026\" id=\"task[comments_attributes][0]_submit\" name=\"commit\" type=\"submit\" value=\"Save\">\n  </div>\n</div>\n","task":"<!-- CLEANME: taskStatus is deprecated and hidden -->\n<div class='taskStatus'>\n  <!-- <img src='drag.png' class='task_drag'/> if editable and !task.archived? -->\n  <span class='task_status task_counter' data-task-id='{{id}}'>{{comments_count}}</span>\n</div>\n<div class='status'>{{status_text}}</div>\n<div class='taskName'>\n  <a class='name' href='/projects/{{project_id}}/tasks/{{id}}'>{{name}}</a>\n  <form class='edit_title' style='display: none'>\n    <input value='{{name}}'>\n  </form>\n  <div class='expanded_actions' style='display: none'>\n    <a class='full' href='/projects/{{project_id}}/tasks/{{id}}'>Full view</a>\n    <a class='edit' href='#'>Edit title</a>\n  </div>\n  {{#if due_on}}\n  <span class='assigned_date' style='display: inline-block'>{{date due_on}}</span>\n  {{/if}}\n  {{#assigned}}\n  <span class='assigned_user'>\n    <a href='/users/{{user.username}}'>{{short_name user}}</a>\n  </span>\n  {{/assigned}}\n  <div class='extended'>\n    <span class='project'>\n      <a href='/projects/{{project_id}}'>{{project.name}}</a>\n      &rarr;\n    </span>\n    <span class='task_list'>\n      <a href='/projects/{{project_id}}/task_lists'>{{task_list.name}}</a>\n    </span>\n  </div>\n</div>\n<div class='clear'></div>\n<div class='thread' style='display: none'>\n  <div class='comments'>\n    {{#first_comment}}{{> comment}}{{/first_comment}}\n    {{#if hidden_comments_count}}\n    <div class='more_comments'>\n      <a data-remote='true' href='/activities/{{id}}/show_thread?thread_type={{type}}'></a>\n      Show {{hidden_comments_count}} previous comments\n    </div>\n    {{/if}}\n    {{#recent_comments}}{{> comment}}{{/recent_comments}}\n  </div>\n  {{> comment_form}}\n</div>\n","add_watchers":"<p>Click on users to @mention them in your comment. Mentioned users will receive email notifications for your message and others after it.</p>\n<div class='watcher'>\n  <a data-login='all' href='#'>\n    <strong>All users</strong>\n  </a>\n</div>\n{{#users}}\n<div class='watcher'>\n  <a data-login='{{username}}' href='#'>{{full_name}}</a>\n</div>\n{{/users}}\n"},"search":{"results":"<p>Found {{length}} results</p>\n<div id='results'>\n  {{#results}}\n  <div class='result'>\n    <div class='{{icon_class}}'></div>\n    {{#project}}\n    <a href='{{url}}'>{{name}}</a>\n    {{/project}}\n    &rarr;\n    <a href='{{url}}'>{{name}}</a>\n    <span class='time'>{{time_ago updated_at}}</span>\n  </div>\n  {{/results}}\n</div>\n","loading":"<h2>\n  Results for <strong>{{query}}</strong>\n</h2>\n<div id='search_results'>\n  <p class='loading'>\n    <img src='/images/loading.gif'>\n    Loading...\n  </p>\n</div>\n","quicksearch":"<ul id='quicksearch_results'>\n  <li class='selected'>\n    <a class='submit_search' href='#!/search/{{query}}'>\n      Search all results in Teambox...\n    </a>\n  </li>\n  {{#results}}\n  <li>\n    <a href='{{url}}'>{{type}}: {{name}}</a>\n  </li>\n  {{/results}}\n</ul>\n"}});