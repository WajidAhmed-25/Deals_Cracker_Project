import React from "react";

export default function About_Work(){

return(

<div>

<div className="container px-4 py-12 mx-auto">
      {/* Main title */}
      <h2 className="mb-6 text-4xl font-bold fontColor">Our Work</h2>

      {/* Lorem ipsum text */}
      <div className="max-w-3xl mb-8">
        <p className="mb-4 text-black/70">
          Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati vos iste. Soluta rerum quidem minus ut molestias velit error quod. Excepturi quidem expedita molestias quas.
        </p>
        <p className="text-black/70">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Est sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* First column */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
              alt="Person at beach"
              className="object-cover w-full h-48"
            />
          </div>
        </div>

        {/* Second column */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
              alt="Office meeting"
              className="object-cover w-full h-96"
            />
          </div>
        </div>

        {/* Third column */}
        <div className="space-y-6">
          {/* Top image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
              alt="Person in green"
              className="object-cover w-full h-48"
            />
          </div>
          {/* Bottom image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
              alt="Volleyball players"
              className="object-cover w-full h-48"
            />
          </div>
        </div>
      </div>
    </div>

</div>


)
}