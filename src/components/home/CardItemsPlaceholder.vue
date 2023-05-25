<template>
  <q-card
      v-for="n in 4"
      :key="n"
      class="my-card q-mb-md" 
      >
        <q-card-section class="bg-primary text-white q-pa-sm row justify-between">
            <div class="date">          
                <div class="text-subtitle2">
                    <q-skeleton width="40px" type="text" />                    
                </div>
            </div>
            <div class="sub-total">          
                <div class="text-subtitle2">
                    <q-skeleton width="40px" type="text" />
                </div>
            </div>
        </q-card-section>
    
        <q-card-actions vertical align="center" class="" >
            <q-list class="full-width">
                <q-item class="row justify-between">
                    <div class="left-section row">
                        <q-item-section avatar>
                            <q-avatar>
                              <q-skeleton type="QAvatar" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <strong>
                                <q-skeleton width="40px" type="text" />                                
                            </strong>
                        </q-item-section>
                    </div>
                    <div class="right-section row items-center text-subtitle2">
                        <strong> 
                            <q-skeleton width="40px" type="text" />
                        </strong>
                    </div>
                </q-item>
            </q-list>
        </q-card-actions>
      </q-card>
</template>

<script>
export default {

}
</script>

<style>

</style>