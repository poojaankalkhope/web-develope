export function MyTableV1() {
 
    // static data
  const details = [
    {state:'Indiana', city: 'Indianapolis'},
   {state: 'Ohio', city: 'Columbus'},
    {state: 'Michigun', city: 'Detroit' }
 ]

    return (
        <div className="flex justify-center"> 
        <table class=" border-collapse border border-slate-400 w-[25%]">

             <thead>
                 <tr>
                     <th class="border border-slate-300  bg-slate-100">Sr</th>
                     <th class="border border-slate-300  bg-slate-100">State</th>
                     <th class="border border-slate-300  bg-slate-100">City</th>
                 </tr>
             </thead>

              <tbody>
                  <tr>
                     <td class="border border-slate-300 text-center">1</td>
                     <td class="border border-slate-300 text-center">Indiana</td>
                     <td class="border border-slate-300 text-center">Indianapolis</td>
                   </tr>
                    <tr>
                       <td class="border border-slate-300 text-center">2</td>
                        <td class="border border-slate-300te text-center">Ohio</td>
                        <td class="border border-slate-300 text-center">Columbus</td>
                   </tr>
                   <tr>
                     <td class="border border-slate-300 text-center">3</td>
                       <td class="border border-slate-300 text-center">Michigan</td>
                       <td class="border border-slate-300 text-center">Detroit</td>
                     </tr>
                  </tbody>
        </table>
        </div>
    )
}
 